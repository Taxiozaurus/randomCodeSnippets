class LinkedList:
	def __init__(self):
		self.__head = None
		self.__end = None
		self.__size = 0
	
	def __str__(self):
		outputString = ""
		item = self.__head
		while item:
			if outputString: outputString += " "
			outputString += str(item)
			item = item.next()
		return outputString
	
	def get_size(self):
		return self.__size

	def push_front(self, data):
		item = LinkedListItem(data, self.__head)
		self.__head = item
		if self.__size == 0:
			self.__end = item
		self.__size += 1
	
	def push_back(self, data):
		item = LinkedListItem(data)
		if self.__size == 0:
			self.__head = item
		elif self.__end:
			self.__end.set_next(item)
		self.__end = item
		self.__size += 1

	def pop_front(self):
		if self.__size < 1:
			return None
		pop = self.__head
		self.__head = self.__head.next()
		self.__size -= 1
		return pop

class LinkedListItem:
	def __init__(self, data=None, nextItem=None):
		self.data = data
		self.nextItem = nextItem

	def __str__(self):
		return str(self.data)

	def next(self):
		return self.nextItem
	
	def set_next(self, nextItem=None):
		self.nextItem = nextItem
