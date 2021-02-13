#Challenge 1 Countdown

newlist=[]
def countdown(num):
    for i in range(num, -1, -1):
        newlist.append(i)
    return newlist
print(countdown(5))


#Challenge 2 Print and Return

def list(a,b):
    print(a)
    return(b)
print(list(1,3))



#Challenge 3 First Plus Length

def first_plus_length(arr):
    sum=arr[0]+len(arr)
    return sum
print(first_plus_length([1, 2, 3, 4, 5]))



#Challenge 4 Values Greater than Second
def values_greater(arr):
    newarr = []
    for i in range(0,len(arr),1):
        if arr[i]>arr[1]:
            newarr.append(arr[i])
    return newarr
print(values_greater([5,2,3,2,1,4]))  #print 3 and return [5,3,4]
#print(values_greater([3]))  #false


#Challenge 5 This Length, That Value

def lengthValue(size,volume):
    newArr=[]
    for i in range(size):
        newArr.append(volume)
    return newArr
print(lengthValue(3,9))