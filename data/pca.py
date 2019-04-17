import numpy as np
import pandas as pd
import random
from scipy.spatial import distance
from scipy import cluster
from collections import defaultdict
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from mpl_toolkits import mplot3d

userViewFrame = pd.DataFrame();
userViewFrame = pd.read_csv("userCategoryMatrix.csv",header=None);
userViewData = np.array(userViewFrame)

userViewData = StandardScaler().fit_transform(userViewData)

pca = PCA(n_components=10)
principalComponents = pca.fit_transform(userViewData)
principalDf = pd.DataFrame(data = principalComponents
             , columns = ['principal component 1', 'principal component 2',
             'principal component 3', 'principal component 4',
             'principal component 5', 'principal component 6',
             'principal component 7', 'principal component 8',
             'principal component 9', 'principal component 10', ])
# principalDf = pd.DataFrame(data = principalComponents
#              , columns = ['principal component 1', 'principal component 2','principal component 3' ])

print principalDf

x = np.array(principalDf["principal component 1"])
y = np.array(principalDf["principal component 2"])
z = np.array(principalDf["principal component 3"])
# plt.plot(x,y,z)
# plt.plot(principalDf[:,0], principalDf[:,1], principalDf[:,2])


fig = plt.figure(figsize = (8,8))
ax = plt.axes(projection='3d')
# ax = fig.add_subplot(111,projection='3d')

ax.set_xlabel('Category 1', fontsize = 15)
ax.set_ylabel('Category 2', fontsize = 15)
ax.set_zlabel('Category 3', fontsize = 15)
ax.set_title('3 component PCA', fontsize = 20)

ax.plot3D(x, y, z, 'gray')
fig

# plt.show()
targets = ['Category1', 'Category2', 'Category3']
colors = ['r', 'g', 'b']


# for target, color in zip(targets,colors):
#     indicesToKeep = finalDf['target'] == target
#     ax.scatter(finalDf.loc[indicesToKeep, 'principal component 1']
#                , finalDf.loc[indicesToKeep, 'principal component 2']
#                 finalDf.loc[indicesToKeep, 'principal component 3']
#                , c = color
#                , s = 50)
# ax.legend(targets)
# ax.grid()
