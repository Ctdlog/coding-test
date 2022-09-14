from bisect import bisect_left, bisect_right

n = int(input())
n_array = list(map(int, input().split()))

m = int(input())
m_array = list(map(int, input().split()))

n_array = sorted(n_array)

# 값이 [left_value, right_value]인 데이터의 개수를 반환하는 함수
def count_by_range(a, left_value, right_value):
    right_index = bisect_right(a, right_value)
    left_index = bisect_left(a, left_value)
    if right_index - left_index >= 1:
        return "yes"
    else:
        return "no"


for i in m_array:
    print(i)
    print(count_by_range(n_array, i, i))
