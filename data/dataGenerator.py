import csv
from random import randint

fileName = "user2_view.csv"

with open(fileName, 'w') as csvfile:
    filewriter = csv.writer(csvfile, delimiter=',',
                            quotechar='|', quoting=csv.QUOTE_MINIMAL)

    categories = [i for i in range(1000)]
    filewriter.writerow(['item', 'itemId', 'title', 'category'])
    for i in range(10000) :
        a = 9876543
        filewriter.writerow(['item' + str(i), str(a+i), 'Item' + str(i), str(categories[randint(0, 999)]) ])
