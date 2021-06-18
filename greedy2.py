numbers = list(input())
sum = 1

for i in range(len(numbers)):
    if i <= 1:
        sum = sum + i
    else:
        sum = sum * int(numbers[i])

print(sum)
