#Challenge 1: Update Values in Dictionaries and Lists

x= [ [5,2,3], [10,8,9] ]
students = [
    {'first_name': 'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x':10, 'y':20}]


# #a Change the value 10 in x to 15. Once you're done, x should now be [[5,2,3],[15,8,9]]

def funcA(lst, idx, chgVal):
    # print(lst)
    lst[idx[0]][idx[1]] = chgVal
    print(lst)
    return lst


funcA(x, [1,0],15 )


# #b Change the last_name of the first student from 'Jordan' to 'Bryant'
students = [
    {'first_name': 'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'}
]


#shorter version to change it to anything
def funcB(lst, lstname):
    lst[0]['last_name'] = lstname
    print(lst)

funcB(students, 'Bryant')


# #c In the sports_directory, change 'Messi' to 'Andres'
sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Messi', 'Ronaldo', 'Rooney']
}

def funcC(my_dict, keyname, idx, val):
    print(my_dict)
    my_dict[keyname][idx]=val
    print(my_dict)


funcC(sports_directory, 'soccer', 0, 'andress')


# #b Change the value 20 in z to 30
z = [{'x': 10, 'y': 20}]
def funcD(lst,idx, mykey, val):
    lst[idx][mykey]=val
    print(lst)

funcD(z, 0, 'y', 30)


#2
students = [
    {'first_name': 'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]

def iterateDict(some_list):
    for i in range(len(some_list)):
        print(some_list[i])
    return some_list


iterateDict(students)


should output: (it's okay if each key-value pair ends up on 2 separate lines
bonus to get them to appear exactly as below!)
first_name - Michael, last_name - Jordan
first_name - John, last_name - Rosales
first_name - Mark, last_name - Guillen
first_name - KB, last_name - Tonel

#3
students = [
{'first_name': 'Michael', 'last_name': 'Jordan'},
{'first_name': 'John', 'last_name': 'Rosales'},
{'first_name': 'Mark', 'last_name': 'Guillen'},
{'first_name': 'KB', 'last_name': 'Tonel'}
]

def iterateDict2(key_name, some_list):
    for i in range(len(some_list)):
        print(some_list[i][key_name])
    return 'first_name','last_name'

iterateDict2('first_name', students)
iterateDict2('last_name', students)

# 4
dojo = {
    'locations':['San Jose','Seattle','Dallas','Chicago','Tulsa','DC','Burbank'],
    'instructors':['Michael','Amy','Eduardo','Josh','Graham','Patrick','Minh','Devon']
}


numbLocations = 0
numbInstructors = 0

def printinfo(lst):
        print(len(lst['locations']),"Locations")
        for i in range(len(lst['locations'])):
            # print('entered i loop')
            print(lst['locations'][i])
            numbLocations = len(lst['locations'])
        print(len(lst['instructors']), "Instructors")
        for j in range(len(lst['instructors'])):
            # print('entered j loop')
            print(lst['instructors'][j])
            numbInstructors = len(lst['instructors'])
        return numbLocations, numbInstructors

printinfo(dojo)
