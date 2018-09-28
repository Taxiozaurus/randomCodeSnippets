MAX_INT = 999999999
distMatrix = [
	[0,  5, 6,  19],
	[9,  0, 5,  32],
	[8,  9, 0,  45],
	[53, 8, 96, 0]
]

# Vertical
def findMinVert(arr, col):
	minValue = MAX_INT
	valueIndex = 0
	for idx in range(0, len(arr)):
		if minValue > arr[idx][col] and arr[idx][col] > 0:
			minValue = arr[idx][col]
			valueIndex = idx
	return [valueIndex, minValue]

# Horizontal
def findMinHor(arr, row):
	minValue = MAX_INT
	valueIndex = 0
	for idx in range(0, len(arr[row])):
		if minValue > arr[row][idx] and arr[row][idx] > 0:
			minValue = arr[row][idx]
			valueIndex = idx
	return [valueIndex, minValue]

for k in range(0, 4):
	print("Row: " + str(k) + " Min: ", findMinHor(distMatrix, k))

for u in range(0, 4):
	print("Col: " + str(u) + " Min: ", findMinVert(distMatrix, u))