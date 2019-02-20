class DoubleLinkedList:
	def __init__(self):
		self.__current = None
		self.__head = None
		self.__end = None
		self.__size = 0
		self.__forward = True
	
	def __len__(self):
		return self.__size

	def get_value(self):
		return self.__current.get_data() if self.__current else None
	
	def reverse(self):
		self.__forward = not self.__forward
		self.__current = self.__end
		self.__end = self.__head
		self.__head = self.__current
	
	def insert(self, data=None):
		prev = self.__current.prev(self.__forward) if self.__current else None
		newNode = Node(data, prev, self.__current)
		if self.__current: self.__current.set_prev(newNode, self.__forward)
		if not prev:
			self.__head = newNode
		if not self.__current:
			self.__end = newNode
		self.__current = newNode
		self.__size += 1

	def remove(self):
		if not self.__current:
			return None
		prevNode = self.__current.prev(self.__forward)
		nextNode = self.__current.next(self.__forward)
		if nextNode:
			self.__current = nextNode
			nextNode.set_prev(prevNode, self.__forward)
		else:
			self.__current = prevNode
		if prevNode:
			prevNode.set_next(nextNode, self.__forward)
		if not self.__current.prev(self.__forward):
			self.__head = self.__current
		if not self.__current.next(self.__forward):
			self.__end = self.__current
		self.__size -=1
	
	def move_to_next(self):
		if not self.__current:
			return None
		if not self.__current.next(self.__forward):
			return None
		self.__current = self.__current.next(self.__forward)

	def move_to_prev(self):
		if not self.__current:
			return None
		if not self.__current.prev(self.__forward):
			return None
		self.__current = self.__current.prev(self.__forward)
	
	def move_to_pos(self, position=0):
		if position < 0 or position >= self.__size:
			return None
		temp = self.__head
		while position > 0:
			temp = temp.next(self.__forward)
			position -= 1
		self.__current = temp

	def remove_all(self, value):
		switchToHead = value == self.get_value()
		temp = self.__head
		prevNode = None
		while temp:
			if temp.get_data() != value:
				prevNode = temp
				temp = temp.next(self.__forward)
				continue
			nextNode = temp.next(self.__forward)
			if prevNode:
				prevNode.set_next(nextNode, self.__forward)
			if nextNode:
				nextNode.set_prev(prevNode, self.__forward)
			if not prevNode:
				self.__head = nextNode
			if not nextNode:
				self.__end = prevNode
			prevNode = temp
			temp = nextNode
		if switchToHead:
			self.__current = self.__head


class Node:
	def __init__(self, data=None, prevNode=None, nextNode=None):
		self.__data = data
		self.__prevNode = prevNode
		self.__nextNode = nextNode
	
	def __str__(self):
		return str(self.__data)
	
	def get_data(self):
		return self.__data

	def next(self, forward=True):
		return self.__nextNode if forward else self.__prevNode
	
	def prev(self, forward=True):
		return self.__prevNode if forward else self.__nextNode

	def set_next(self, nextNode=None, forward=True):
		if forward:
			self.__nextNode = nextNode
		else:
			self.__prevNode = nextNode

	def set_prev(self, prevNode=None, forward=True):
		if forward:
			self.__prevNode = prevNode
		else:
			self.__nextNode = prevNode
