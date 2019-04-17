import sys
import pandas as pd
import numpy as np

userTop10 = pd.DataFrame();
userTop10 = pd.read_csv("/Users/ackulkarni/Documents/ackulkarni/ebay_avatar/data/userToCategories10.csv",header=None);

def getTop10Percentages(userTop10List) :

    sum = 0;
    for i in range(len(userTop10List)) :
        userTop10List[i] = abs(userTop10List[i])
        sum = sum+userTop10List[i]

    for i in range(len(userTop10List)) :
        userTop10List[i] = int((userTop10List[i]/sum)*100)



    return userTop10List


def __main__():

    userTop10Arr = np.array(userTop10)
    uid = sys.argv[1]
    userTop10List = userTop10Arr[int(uid)]
    top10Percentages = getTop10Percentages(userTop10List)

    for i in top10Percentages :
        print `i` + ","

    # print top10Percentages
    sys.stdout.flush()
    # return top10Percentages

__main__()
