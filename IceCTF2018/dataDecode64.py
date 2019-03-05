import base64

source_file = open("data.txt", "r")
contents = source_file.read()
decoded = base64.b64decode(contents)

print(decoded.decode())

#decoded_file = open("data_decoded.txt", "w")
#decoded_file.write(decoded)
#decoded_file.close()