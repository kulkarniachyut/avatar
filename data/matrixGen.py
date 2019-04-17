import csv
from random import randint
import numpy


fileName = "matrix.csv"

w, h = 1000, 100;
matrix = [[0 for x in range(w)] for y in range(h)]

for i in range(len(matrix)) :
    for j in range(len(matrix[i])) :
        matrix[i][j] = randint(0, 4)

print matrix

numpy.savetxt(fileName, matrix, delimiter=",")
