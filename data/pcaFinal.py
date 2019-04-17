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
             , columns = ['cat1', 'cat2','cat3', 'cat4','cat5', 'cat6',
             'cat7', 'cat8','cat9', 'cat10' ])
# principalDf = pd.DataFrame(data = principalComponents
#              , columns = ['principal component 1', 'principal component 2','principal component 3' ])
top10List = np.array(principalDf)
print top10List

fileName = "userToCategories10.csv"
np.savetxt(fileName, top10List, delimiter=",")
