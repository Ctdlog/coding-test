s = input()

list = []
sum = 0

for i in s:
    try:
        i = int(i)
        sum += i
    except:
        list.append(i)

list.sort()

if sum != 0:
    list.append(str(sum))

print("".join(list))
