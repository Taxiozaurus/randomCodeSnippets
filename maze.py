
maze = """x x x
 @@@ 
x x@x
 @ @ 
x@x@x"""
pX = 1
pY = 1

finishCheck = pX == 3 and pY == 1
while not finishCheck:
    # Check directions
    realX = (pX - 1) * 2
    realY = 4 - (pY - 1) * 2

    up = False
    down = False
    left = False
    right = False

    charY = -1
    for row in maze.split('\n'):
      charY += 1
      charX = -1
      for char in row:
        charX += 1
        # check UP
        if realX == charX and realY - 1 == charY and char == ' ':
          up = True
        # check DOWN
        if realX == charX and realY + 1 == charY and char == ' ':
          down = True
        # check LEFT
        if realY == charY and realX - 1 == charX and char == ' ':
          left = True
        # check RIGHT
        if realY == charY and realX + 1 == charX and char == ' ':
          right = True
    
    movements = "Available directions:"
    if up:
      movements += " N"
    if down:
      movements += " S"
    if left:
      movements += " W"
    if right:
      movements += " E"

    direction = str(input(movements + "\nWhere to move: ")).upper()
    newX = pX
    newY = pY
    if direction == 'N':
      if up:
        newY += 1
    if direction == 'S':
      if down:
        newY -= 1
    if direction == 'W':
      if left:
        newX -= 1
    if direction == 'E':
      if right:
        newX += 1
    
    if newX == pX and newY == pY:
      print("You cannot go there")
    else:
      pX = newX
      pY = newY
      print("New location: " + str(pX) + ", " + str(pY))

    # Reevaluate finish condition at loop end
    finishCheck = pX == 3 and pY == 1