import numpy as np
import pandas as pd
import random
from scipy.spatial import distance
from scipy import cluster
from collections import defaultdict


userViewFrame = pd.DataFrame();
userViewFrame = pd.read_csv("user1_view.csv",header=None);
userViewData = np.array(userViewFrame)


def centroid(indices,points):
    sum_x =0;sum_y =0;
    for i in indices:
        sum_x=sum_x+ (points[i][0])
        sum_y =sum_y + np.sum(points[i][1])
    return [sum_x/len(indices) , sum_y/len(indices)]


def kmeans(K,points):
    clusters = random.sample(points,K)
    dict= defaultdict(list)
    # print clusters
    dist=[];
    loop = True
    while(loop):
        count=0;old=[]
        for i in range(0,len(points)):
            for j in range(0,len(clusters)):
                dist.append(distance.euclidean(points[i][-1], clusters[j][-1]));
            k = np.argmin(dist)
            dict[k].append(i)
            # print dict
            dist = []
        for i in range(0,len(clusters)):
            old.append(clusters[i])

        for i in range(0,len(clusters)):
            # print clusters[i]
            clusters[i] = centroid(dict[i],points)
            # print clusters[i]
        for i in range(0, len(clusters)):
            # print old[i]
            # print clusters[i]
            # print distance.euclidean(old[i],clusters[i])
            if(distance.euclidean(old[i],clusters[i]) == 0):
                count+=1
        # print count
        x = []
        for i in range(0,K):
            print (dict[i])
            # print len(dict[i])
            x.append(dict[i])

        dict = defaultdict(list)
        if(count == len(clusters)):
            loop = False

            for i in range(0,len(x)):
                xPoints = [];
                yPoints = [];
                for j in x[i]:
                    xPoints.append(points[j][0])
                    yPoints.append(points[j][1])
                plot.scatter(xPoints,yPoints,color=np.random.rand(3,1))
            plot.show()


def __main__():
    print (" ---------User View ------")
    for i in [5, 8, 10]:
        print ("For K= ", i , "--------------------")
        kmeans(i,userViewData)
        print
        # break

__main__()
