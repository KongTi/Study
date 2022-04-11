# [문제1]

# 1
i = 0
list = []
while i < 3 :
    list.append(input("coffee 이름 : "))
    print(list)
    i += 1

# 2
num_list = []
coffee_list = ['americano','latte','hazelnut']
for i in coffee_list:
    num_list.append(int(input(i+" 주문 수 : ")))
    print(num_list)

print("<주문하신 커피 리스트>")
for coffee,num in zip(coffee_list,num_list):
    for i in range(num):
        print(coffee)

# 3
from random import randint, choice
print("<난수발생>")
number = [randint(0,100) for i in range(10)]
print(number)
print(sum(number))

# 4
DNA = ['A','G','C','T']
print("<DNA 염기서열 AGCT>")
for i in [randint(0,3) for i in range(10)]:
    print(DNA[i])
