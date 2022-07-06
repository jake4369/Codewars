# Square Every Digit - 11/06/2022
# https://www.codewars.com/kata/546e2562b03326a88e000020
def square_digits(num):
    return int(''.join(str(int(x)**2) for x in str(num)))

# Odd or Even? - 11/06/2022
# https://www.codewars.com/kata/5949481f86420f59480000e7
def odd_or_even(arr):
    if sum(arr) % 2 == 0:
        return 'even'
    else:
        return 'odd'

# Anagram Detection - 06/07/2022
# https://www.codewars.com/kata/529eef7a9194e0cbc1000255
def is_anagram(test, original):
    return sorted(original.lower()) == sorted(test.lower()) 