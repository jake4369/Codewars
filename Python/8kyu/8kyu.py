import math

# Return Negative - 11/06/2022
# https://www.codewars.com/kata/55685cd7ad70877c23000102
def make_negative(number):
    if number < 0:
       return -abs(number)
    else:
        return -number

# Find the smallest integer in the array - 11/06/2022
# https://www.codewars.com/kata/55a2d7ebe362935a210000b2
def find_smallest_int(arr):
    arr.sort()
    return arr[0]

# Sum of positive - 11/06/2022
# https://www.codewars.com/kata/5715eaedb436cf5606000381
def positive_sum(arr):
    return sum(filter(lambda num: num > 0, arr))

# Keep Hydrated! - 11/06/2022
# https://www.codewars.com/kata/582cb0224e56e068d800003c
def litres(time):
    return int(round(math.floor(time * 0.5)))

# Cat years, Dog years - 11/06/2022
# https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
def human_years_cat_years_dog_years(human_years):
    if human_years == 1:
        cat_age = 15
        dog_age = 15
        return [human_years, cat_age, dog_age]
    elif human_years == 2:
        cat_age = 24
        dog_age = 24
        return [human_years, cat_age, dog_age]
    else:
        cat_age = 24 + (human_years - 2) * 4
        dog_age = 24 + (human_years - 2) * 5
        return [human_years, cat_age, dog_age]

# Beginner Series #2 Clock - 11/06/2022
# https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
def past(h, m, s):
    return h * 3600000 + m * 60000 + s * 1000

# Rock Paper Scissors! - 11/06/2022
# https://www.codewars.com/kata/5672a98bdbdd995fad00000f
def rps(p1, p2):
    if p1 == 'rock' and p2 == 'scissors' or p1 == 'paper' and p2 == 'rock' or p1 == 'scissors' and p2 == "paper":
        return "Player 1 won!"
    elif p2 == 'rock' and p1 == 'scissors' or p2 == 'paper' and p1 == 'rock' or p2 == 'scissors' and p1 == "paper":
        return "Player 2 won!"
    elif p1 == p2:
        return 'Draw!'

# Grasshopper - Personalized Message - 11/06/2022
# https://www.codewars.com/kata/5772da22b89313a4d50012f7
def greet(name, owner):
    if name == owner:
        return 'Hello boss'
    else:
        return 'Hello guest'

# You only need one - Beginner - 11/06/2022
# https://www.codewars.com/kata/57cc975ed542d3148f00015b
def check(seq, elem):
    return elem in seq

# Find the first non-consecutive number - 11/06/2022
# https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
def first_non_consecutive(arr):
    length = len(arr)
    for i in range(length - 1):
        if arr[i + 1] == arr[i] + 1:
            continue
        else:
            return arr[i + 1]
    return None

# Is he gonna survive? - 11/06/2022
# https://www.codewars.com/kata/59ca8246d751df55cc00014c
def hero(bullets, dragons):
    print(bullets / dragons >= 2)

# Century From Year - 11/06/2022
# https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
def century(year):
    if year % 100 == 0:
        return int(round(year / 100))
    else:
        return int(round(math.ceil(year / 100)))
