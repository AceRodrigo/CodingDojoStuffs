# #Challenge 1 Biggie Size

# def biggie(arr):
#     newArr = []
#     for i in range(len(arr)):
#         if arr[i] >= 0:
#             newArr.append("big")
#         else:
#             newArr.append(arr[i])
#     return newArr
# print(biggie([-1, 2, 5, -5]))


# #Challenge 2 Count Positives

# def myFunc(a):
#     count=0
#     for i in range(0,len(a)):
#         if a[i]>=1:
#             count=count+1
#     a[len(a) -1] + count
#     return a
# print(myFunc([1,6,-4,-2,-7,-2]))


# #Challenge 3 Sum total

# def myFunc(a):
#     sum=0
#     for i in range(0, len(a)):
#         sum=sum+a[i]
#     return sum

# print(myFunc([1,2,3,4]))\


# #Challenge 4 average

# def average(a):
#     avg=0
#     sum=0
#     for i in range(0,len(a)):
#         sum=sum+a[i]
#         avg=sum/len(a)
#     return avg
# print(average([1,2,3,4]))


# #Challenge 5

# def length(list):
#     newArr=[]
#     for i in range(0,len(list)):
#         newArr=len(list)
#     return newArr
# print(length([5,2,3,5]))


# #Challenge 6 Minimum

# def minimum(a):
#     min=0
#     for i in range(0,len(a)):
#         if a[i]<min:
#             return(a[i])
# print(minimum([27,2,1,-9]))


# #Challenge 7 Maximum

# def maximum(a):
#     max=0
#     for i in range(0, len(a)):
#         if a[i]>max:
#             return len(a)
#         if a[i]!=max:
#             return False

# print(maximum([1,2,3,4,5]))

# #Have to change the max in order to falsify this function
# #Challenge 8 Ulitmate Analysis

# my_dict[
#     {'sumTotal': 0, 'average': 0, 'minimum': 0, 'maximum':0, 'length':0}
# ]

# def ultimate_analysis(list):
#     sumTotal=0
#     min=list[0]
#     max=list[0]
#     for i in range(len(list)):
#         sumTotal+=list[i]
#         ave=sumTotal/len(list)
#         if list[i]>max:
#             max=list[i]
#         if list[i]<min:
#             min=list[i]
#     my_dict={
#         'sumTotal': sumTotal,
#         'average': ave,
#         'minimum': min,
#         'maximum': max,
#         'length': len(list)
#     }
#     return my_dict

# print(ultimate_analysis([27,2,1,-9]))


# 9 Reverse List


# def reverse(lst):
#     temp = 0
#     for i in range(len(lst)/2):
#         temp = lst[i]
#         lst[i] = lst[len(lst) - 1 - i]
#         lst[len(lst)-1-i] = temp
#     return lst

# print(reverse([1, 2, 3, 4]))


def reverse(list):
    temp = 0
    for i in range(int(len(list)/2)):
        temp = list[i]
        list[i] = list[len(list) - 1 - i]
        list[len(list)-1-i] = temp
    return list


print(reverse([1, 2, 3, 4]))


