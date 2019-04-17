import numpy as np
import pandas as pd

matrixDF = pd.DataFrame();
matrixDF = pd.read_csv("matrix.csv",header=None);
matrixArr = np.array(matrixDF)

fileName = "userCorrelation.csv"
w, h = 100, 100;
matrix = [[0 for x in range(w)] for y in range(h)]

for i in range(len(matrixArr)) :
    for j in range(len(matrixArr)) :
        correlation = abs(np.corrcoef(matrixArr[i], matrixArr[j])[0,1])
        matrix[i][j] = correlation

print  matrix
np.savetxt(fileName, matrix, delimiter=",")
