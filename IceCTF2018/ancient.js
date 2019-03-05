var text = 'E2 A8 85 5D 5D E2 8C 9E E2 8C 9E E2 8C 9F 5B E2 A8 86 5D E2 8C 9F 5D 5D 5D E2 A8 86 E2 A8 86 E2 A8 86 E2 8C 9C 5B 5B 5B E2 8C 9D E2 8C 9D E2 8C 9D E2 8C 9E E2 8C 9D E2 8C 9D E2 8C 9D E2 8C 9D E2 A8 86 E2 8C 9D E2 8C 9D E2 8C 9D E2 8C 9E E2 8C 9E E2 8C 9D E2 8C 9D E2 8C 9D E2 8C 9D E2 8C 9F E2 8C 9D E2 8C 9D E2 A8 85 E2 A8 85 E2 8C 9E E2 8C 9E E2 A8 86 5B 5D 5D 5D E2 8C 9D E2 8C 9D E2 8C 9D E2 8C 9D 5D 5D E2 8C 9F 5B 5B 5B E2 8C 9D E2 8C 9D E2 8C 9D E2 8C 9D E2 8C 9F E2 8C 9D E2 8C 9D E2 8C 9D E2 8C 9D 5D 5D 5D E2 8C 9E E2 8C 9E E2 8C 9E E2 8C 9D E2 8C 9D E2 8C 9D E2 A8 86 5D E2 8C 9E E2 8C 9E';
text = text.split(' ');

var result = '';
for (var k = 0; k < text.length; k++) {
    result += hex2a(text[k]);
}
console.log(result);

function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}
