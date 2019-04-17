import numpy as np
import pandas as pd
import random
from scipy.spatial import distance
from scipy import cluster
from collections import defaultdict


userViewFrame = pd.DataFrame();
userViewFrame = pd.read_csv("userCategoryMatrix.csv",header=None);
userViewData = np.array(userViewFrame)


def centroid(indices,points):
    sum_x =0;sum_y =0;
    for i in indices:
        sum_x=sum_x+ (points[i][0])
        sum_y =sum_y + np.sum(points[i][1])
    return [sum_x/len(indices) , sum_y/len(indices)]


def kmeans(K,points):
    clusters = random.sample(points,K)
    # print clusters
    dict= defaultdict(list)
    dist=[];
    loop = True
    while(loop):
        count=0;old=[]
        for i in range(0,len(points)):
            for j in range(0,len(clusters)):
                # dist.append(distance.euclidean(points[i][-1], clusters[j][-1]));\
                # print type(int(points[i][-1].strip()))
                dist.append(abs( int(points[i][-1]) - int(clusters[j][-1])));
            k = np.argmin(dist)
            dict[k].append(i)
            # print dict
            dist = []
        for i in range(0,len(clusters)):
            old.append(clusters[i][-1])
        # print old
        for i in range(0,len(clusters)):
            print clusters[i]
            print len(dict[i])
            print len(points)
            clusters[i] = centroid(dict[i],points)
            # print clusters[i]
            break
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

def kmeans1(k, points) :
    print len(points)
    print (points[:,0])
    print len((points))
    print (points[:,0].shape)

def __main__():
    print (" ---------User View ------")
    for i in [3, 8, 10]:
        print ("For K= ", i , "--------------------")
        kmeans1(i,userViewData[:])
        print
        break

__main__()
