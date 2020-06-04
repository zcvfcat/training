from sys import stdin
from math import factorial


def nCr(n, r):
    return factorial(n)//(factorial(n-r)*factorial(r))


T = int(stdin.readline())

for _ in range(T):
    N, M = map(int, stdin.readline().split())
    print(nCr(M, N))
