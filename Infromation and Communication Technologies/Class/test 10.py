def difference(set1, set2):
    e = set()
    for i in set1:
        if i not in set2:
            e.add(i)
    return e


set_1 = {1,2,3,4,5,6,7,8,9,10}
set_2 = {2,4,6,8,10}
print(difference(set_2,set_1))