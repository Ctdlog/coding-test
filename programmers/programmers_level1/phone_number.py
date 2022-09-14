def solution(phone_number):
    mosaic = len(phone_number) - 4
    phone_number = "*" * mosaic + phone_number[mosaic:]
    return phone_number
