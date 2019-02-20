import * from linkedlist, arrdeque;

class Queue:
	def __init__(self, queueType="array"):
		if queueType == "linked":
			self.__container = LinkedList()
		else:
			self.__container = ArrayDeque()
	
	def get_size(self):
		return self.__container.get_size()
	
	def add(self, data):
		self.__container.push_back(data)
	
	def remove(self):
		return self.__container.pop_front()