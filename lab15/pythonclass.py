"""
Muyinjon Turobov
Aug 8 2024, python class
"""

print("\n ------example 1: class--------")

class MyClass:
    x = 5

#calling the class
myclass = MyClass()
print("The Compelete class",myclass)
print("The property of x",myclass.x)


print("\n ------example 2: initialized a class--------")

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
        #set a class property
        self.luckynumber = 7
        
        #return string
    def __str__(self):
        return f"User {p1.name} is {p1.age} years old"
    def mymethod(self):
        print(f"{self.name}'s lucky number is {self.luckynumber}")

p1 = Person("John", 36)

#create ab object of class Person
print(p1.name)
print(p1.age)
print(f"User {p1.name} is {p1.age} years old")

print(f"Results ---> {p1.luckynumber}")
p1.mymethod()
print(f"\nUser {p1.name} is {p1.age} years old")
print("setting the age to 40")
#modify class property value
p1.age = 40
print("new age:",p1.age)
print(f"\nUser {p1.name} is {p1.age} years old")

class Schedule:
    pass

print("\n ------example 3: class method--------")

class Number:
    def __init__(self, num):
        self.num = num
        
        #accesible class property
    num_symbol = "$"
        
        #define a method to double the number
    def doublenum(self):
        self.num = self.num * 2
        return self.num 
    #return string of the class
    def __str__(self):
        return f"The final number is {self.num_symbol}{self.num}"
    
#create an object of class Number
n1 = Number(5)

print(f"Object of class Number: {n1}")
n1.doublenum()
print(f"Double the number: {(n1)}")
n1.doublenum()

print(f"Return string: {n1.__str__()}")

print("\n ------example 4: class with private property--------")

class Chair:
    def __init__(self, height, width, depth):
        self.height = height
        self.width = width
        self.depth = depth
        self.totaldimension = 0
        self.shippingcostfee = 0.2
        self.totalshippingcost = 0
    
    #accesible class property
    chair_color="brown"
    
    #
    def totaldimensions(self):
        self.totaldimension = self.height * self.width * self.depth
        return self.totaldimension
    def total_shipping_cost(self):
        self.totalshippingcosts = self.totaldimensions() * self.shippingcostfee
        return self.totalshippingcosts
    def __str__(self):
        return f"Chair color is {self.chair_color} and total shipping cost is {self.total_shipping_cost()}"

Chair1 = Chair(3,4,5)

#print the object
print(Chair1.totaldimensions())
print(Chair1)


