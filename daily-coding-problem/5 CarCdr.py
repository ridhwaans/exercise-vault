"""
cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. 
For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
Implement car and cdr.
"""

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
    
def car(pair):
	def first(cons):
		return a
	return first

def cdr(pair):
	def last(cons):
		return b
	return last


print "car(cons(3, 4)) is {0}".format(car(cons(3,4)))
print "cdr(cons(3, 4)) is {0}".format(cdr(cons(3,4)))