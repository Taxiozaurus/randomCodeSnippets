class ArrayDeque:
	# init the dequeue
	def __init__(self):
		self.__list = []
		self.__size = 0

	# Return deque is string
	def __str__(self):
		outputString = ""
		for i in range(0, self.__size):
			if i > 0: outputString += " "
			outputString += str(self.__list[i])
		return outputString

	# Get length of the deque
	def get_size(self):
		return self.__size

	# Add one item to the back of the deque
	def push_back(self, item):
		newList = [0] * (self.__size + 1)
		for i in range(0, self.__size + 1):
			if i > self.__size: break
			newList[i] = self.__list[i] if i < self.__size else item
		self.__size += 1
		self.__list = newList

	# Add one item to the front of the deque
	def push_front(self, item):
		newList = [0] * (self.__size + 1)
		for i in range(0, self.__size + 1):
			if i > self.__size: break
			newList[i] = self.__list[i - 1] if i > 0 else item
		self.__size += 1
		self.__list = newList

	# Remove one item from back of deque
	def pop_back(self):
		if self.__size < 1:
			return None
		pop = self.__list[self.__size - 1]
		self.__list = [self.__list[i] for i in range(0, self.__size - 1)]
		self.__size -= 1
		return pop

	# Remove one item from front of deque
	def pop_front(self):
		if self.__size < 1:
			return None
		pop = self.__list[0]
		self.__list = [self.__list[i] for i in range(1, self.__size)]
		self.__size -= 1
		return pop
