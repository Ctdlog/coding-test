import numpy as np


def solution(arr1, arr2):
    mat1 = np.array(arr1)
    mat2 = np.array(arr2)
    answer = mat1 + mat2
    answer = answer.tolist()
    return answer


print(solution([[1, 2], [2, 3]], [[3, 4], [5, 6]]))
