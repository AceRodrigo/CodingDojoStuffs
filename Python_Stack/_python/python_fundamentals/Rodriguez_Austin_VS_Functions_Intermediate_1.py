import random
def randInt(min, max ):
    num = random.random()
    num = random.random() * 50
    num = random.random() * 25 + 10
    round(num)
    return num
print(randInt(min=0,max=100))		           # should print a random integer between 0 to 100
print(randInt(max=50, min=0))	           # should print a random integer between 0 to 50
print(randInt(min=50, max=100))       # should print a random integer between 50 to 100
print(randInt(min=50, max=500))    # should print a random integer between 50 and 500
