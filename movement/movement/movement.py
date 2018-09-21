import os

START = 1
END = 10
direction = "r"

def print_level(selected, current = 1):
    if current < START:
        return print_level(selected, START)
    elif current > END:
        return True
    print(('X' if current == selected else '_'), end='')
    return print_level(selected, current + 1)

def move(direction, current_position):
    if direction == "r":
        return current_position + 1
    elif direction == "l":
        return current_position - 1
    return current_position

def limit_movement(new_position):
    if new_position < START:
        return START
    elif new_position > END:
        return END
    return new_position

def clear_console():
    os.system('cls' if os.name=='nt' else 'clear')

position = limit_movement(int(str(input("Starting position (1-10): "))))
clear_console()
print_level(position)

while direction == "r" or direction == "l":
    direction = str(input(" Enter a direction (l/r): "))
    position = limit_movement(move(direction, position))
    clear_console()
    print_level(position)
