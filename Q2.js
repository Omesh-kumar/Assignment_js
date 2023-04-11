def search_array(arr, value):
    if len(arr) == 0:  # base case
        return False
    elif arr[0] == value:
        return True
    else:
        return search_array(arr[1:], value
for Example :

my_arr = [3, 5, 2, 8, 1]
print(search_array(my_arr, 8))  # Output: True
print(search_array(my_arr, 4))  # Output: False
