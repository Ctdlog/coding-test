new_arr = []


def soultion(arr):
    new_arr = []

    for i in arr:
        if i == 0:
            new_arr.append(i)
        new_arr.append(i)

    arr = new_arr[: len(arr)]

    for i in range(len(arr)):
        arr[i] = new_arr[i]

    return arr


print(soultion([1, 0, 2, 3, 0, 4, 5, 0]))
