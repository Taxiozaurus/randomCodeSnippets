(function() {
    var diffSelector = document.getElementById("difficultySelector");
    var generatorButton = document.getElementById("generateButton");
    var validatorButton = document.getElementById("validateButton")
    var sudokuIdDisplay = document.getElementById("sudokuId");
    var sudokuBoard = document.getElementById("sudoku");
    var successBanner = document.getElementById("successBanner");
    
    var boardGenerated = false;
    var highlightTimeout;

    function generateBoard() {
        if (boardGenerated)
            return false;
        boardGenerated = true;
        var rowTemplate = document.createElement("tr");
        var cellTemplate = document.createElement("td");
        var cellInputTemplate = document.createElement("input");
        cellInputTemplate.setAttribute("type", "number");
        cellInputTemplate.setAttribute("min", "1");
        cellInputTemplate.setAttribute("max", "9");
        cellInputTemplate.setAttribute("step", "1");
        var row, cell, input;
        for (var y = 0; y < 9; y++) {
            row = rowTemplate.cloneNode();
            row.setAttribute("class", "row-" + y);
            sudokuBoard.appendChild(row);
            for (var x = 0; x < 9; x++) {
                cell = cellTemplate.cloneNode();
                cell.setAttribute("class", "column-" + x + " box-" + calcBox(x, y));
                input = cellInputTemplate.cloneNode();
                input.setAttribute("id", "cell" + calcBox(x, y) + "" + calcBoxIndex(x, y));
                cell.appendChild(input);
                row.appendChild(cell);
            }
        }
    }

    function calcBox(x, y) {
        var _x = Math.floor(x / 3);
        var _y = Math.floor(y / 3);
        return Math.ceil(_x + _y * 3) + 1;
    }

    function calcBoxIndex(x, y) {
        return ((x % 3) + 1) + (y % 3) * 3;
    }

    function resetBoard() {
        sudokuIdDisplay.innerText = "";
        successBanner.classList.remove("show");
        var boardInputs = document.querySelectorAll("#sudoku input");
        for (var input of boardInputs) {
            input.value = "";
            input.removeAttribute("readonly");
            input.classList.remove("error", "warning");
        }
    }

    function populateBoard(boardData) {
        boardData = boardData || populateDefault(diffSelector.value);
        sudokuIdDisplay.innerText = boardData.board._id;
        var box, cell;
        for (var boxId in boardData.board.boxes) {
            box = boardData.board.boxes[boxId];
            for (var cellId in box) {
                if (box[cellId] == "." || !box[cellId])
                    continue;
                cell = document.getElementById("cell" + (parseInt(boxId, 10) + 1) + "" + (parseInt(cellId, 10) + 1));
                cell.value = box[cellId];
                cell.setAttribute("readonly", "readonly");
            }
        }
    }

    function populateDefault(diff) {
        return {
            "easy": {
                "board": {
                    "boxes": {
                        "0": {
                            "0": "5",
                            "1": "6",
                            "2": "4",
                            "3": ".",
                            "4": ".",
                            "5": "3",
                            "6": "2",
                            "7": ".",
                            "8": "1"
                        },
                        "1": {
                            "0": "8",
                            "1": "7",
                            "2": "2",
                            "3": ".",
                            "4": "1",
                            "5": ".",
                            "6": "3",
                            "7": "9",
                            "8": "."
                        },
                        "2": {
                            "0": "3",
                            "1": "9",
                            "2": "1",
                            "3": ".",
                            "4": ".",
                            "5": ".",
                            "6": ".",
                            "7": ".",
                            "8": "5"
                        },
                        "3": {
                            "0": "4",
                            "1": "2",
                            "2": "9",
                            "3": "6",
                            "4": "5",
                            "5": "7",
                            "6": "3",
                            "7": "1",
                            "8": "8"
                        },
                        "4": {
                            "0": ".",
                            "1": ".",
                            "2": "8",
                            "3": "2",
                            "4": "3",
                            "5": "1",
                            "6": "9",
                            "7": "4",
                            "8": "7"
                        },
                        "5": {
                            "0": "7",
                            "1": "1",
                            "2": "3",
                            "3": "8",
                            "4": "4",
                            "5": "9",
                            "6": "5",
                            "7": "2",
                            "8": "6"
                        },
                        "6": {
                            "0": ".",
                            "1": ".",
                            "2": "6",
                            "3": ".",
                            "4": "3",
                            "5": "5",
                            "6": "8",
                            "7": "4",
                            "8": "2"
                        },
                        "7": {
                            "0": "4",
                            "1": "2",
                            "2": "3",
                            "3": "7",
                            "4": "8",
                            "5": "9",
                            "6": "1",
                            "7": ".",
                            "8": "."
                        },
                        "8": {
                            "0": ".",
                            "1": "5",
                            "2": "8",
                            "3": "2",
                            "4": "6",
                            "5": "4",
                            "6": "9",
                            "7": "3",
                            "8": "7"
                        }
                    },
                    "_id": -1
                }
            },
            "medium": {
                "board": {
                    "_id": -1
                }
            },
            "hard": {
                "board": {
                    "_id": -1
                }
            }
        }[diff];
    }

    generatorButton.addEventListener("click", function() {
        resetBoard();
        fetch("https://veff213-sudoku.herokuapp.com/api/v1/sudoku", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                difficulty: diffSelector.value
            })
        })
        .then(function(response) { return response.json(); })
        .catch(function() { console.error("Could not fetch online board data"); })
        .then(populateBoard);
    });

    validatorButton.addEventListener("click", function() {
        var errors = runValidation(false) + runValidation(true);
        clearTimeout(highlightTimeout);
        highlightTimeout = setTimeout(resetHighlights, 5000);

        if (!errors) {
            successBanner.classList.add("show");
            var fields = document.querySelectorAll("#sudoku input:not([readonly])");
            for (var field of fields) {
                field.setAttribute("readonly", "readonly" );
            }
        }
    });

    function runValidation(direction) {
        direction = direction || false;
        var errors = 0;
        var modifier = 0;
        var readonlyInputs, existing;
        var index;
        var types = (direction ? ["column", "row", "box"] : ["box", "row", "column"]);
        for (var type of types) {
            modifier = (type == "box" ? 1 : 0);
            for (var idx = 0; idx < 9; idx++) {
                index = (direction ? 8 - idx : idx);
                readonlyInputs = document.querySelectorAll("#sudoku ." + type + "-" + (index + modifier) + " input[readonly]");
                existing = [];
                for (var defI of readonlyInputs) {
                    existing.push(defI.value);
                }

                inputs = document.querySelectorAll("#sudoku ." + type + "-" + (index + modifier) + " input:not([readonly])");
                if (direction) {
                    inputs = Array.prototype.map.call(inputs, function(a) { return a });
                    inputs.reverse();
                }
                for (var userInput of inputs) {
                    if (!userInput.value) {
                        userInput.classList.add("warning");
                        errors++;
                    } else if (existing.indexOf(userInput.value) > -1) {
                        userInput.classList.add("error");
                        errors++;
                    } else {
                        existing.push(userInput.value);
                    }
                }
            }
        }
        return errors;
    }

    function resetHighlights() {
        var inputs = document.querySelectorAll("input.warning, input.error");
        for (var input of inputs) {
            input.classList.remove("error", "warning");
        }
    }

    generateBoard();
})();
