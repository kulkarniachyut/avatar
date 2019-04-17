from sklearn.cluster import KMeans
import numpy as np
import csv

arr = list()
with open('user1_view.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        arr.append(row['category'])
    nparr = np.array(arr)

nparr = nparr.reshape(-1, 1)
print nparr.shape
kmeans = KMeans(n_clusters=5, random_state=0).fit(nparr)

print kmeans
