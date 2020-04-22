#--------------- Copy this section into your code syntax.js as comments --------

#define attributes / variables
#number
#string
#boolean
#array
#dictionary / objects
#undefined
#sample if / else
#functions
#parameters
#returns
#arrays
#add to the front
#add to the end
#update values??
#loops 
#for
#for/in
#while
#do while
#forEach (with array and function)
#Objects / Dictionaries
#declare object
#lookup key to retrieve value

#--------------- Copy ends here --------

#define attributes / variables


class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname
 
  def printname(self):
    print(self.firstname, self.lastname)
#-----insert code from the Creating a Parent Class example.-----#
class Student(Person):
  def __init__(self, fname, lname, year):
    super().__init__(fname, lname)
    self.graduationyear = year

  def welcome(self):
    print("Welcome", self.firstname, self.lastname, "to the class of", self.graduationyear)

x = Student("Mike", "Olsen", 2019)
x.welcome()



