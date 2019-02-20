import * from linkedlist, arrdeque;

class Stack:
	def __init__(self, stackType="array"):
		if stackType == "linked":
			self.__container = LinkedList()
		else:
			self.__container = ArrayDeque()
	
	def get_size(self):
		return self.__container.get_size()
	
	def push(self, data):
		self.__container.push_front(data)
	
	def pop(self):
		return self.__container.pop_front()