MAX_N = 65
dp = [[0] * 10 for _ in range(MAX_N)]

dp[0][0] = 1
for a in range(MAX_N):
    for b in range(10):
        for c in range(b + 1):
            dp[a][b] += dp[a - 1][c]

for _ in range(int(input())):
    print(sum(dp[int(input())]))
