import sys
sys.setrecursionlimit(300000)

def dfs(i, j):
    if memo[i][j]:
        return memo[i][j]
    memo[i][j] = 1

    for a in range(4):
        ni, nj = i + di[a], j + dj[a]
        if 0 <= ni < n and 0 <= nj < n and forest[i][j] < forest[ni][nj]:
            memo[i][j] = max(memo[i][j], dfs(ni, nj) + 1)
    return memo[i][j]


n = int(input())
forest = [list(map(int, input().split())) for _ in range(n)]
memo = [[0] * n for _ in range(n)]
di = [-1, 1, 0, 0]
dj = [0, 0, -1, 1]
for i in range(n):
    for j in range(n):
        memo[i][j] = dfs(i, j)

print(max(map(max, memo)))
