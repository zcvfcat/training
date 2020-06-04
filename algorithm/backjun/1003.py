from sys import stdin
N = int(stdin.readline())
L = []

for i in range(N):
    L.append(int(stdin.readline()))

M = max(L[:])
dp = [(1, 0), (0, 1), (1, 1)]

for i in range(3, M+1):
    dp.append((dp[i-1][0] + dp[i - 2][0], dp[i-1][1] + dp[i - 2][1]))

for i in range(N):
    print('{} {}'.format(dp[L[i]][0], dp[L[i]][1]))
