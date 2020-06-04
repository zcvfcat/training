from sys import stdin
N = int(stdin.readline())
cost = [0, 0, 0]+[0] * N
dp = [0, 0, 0]+[0] * N

for i in range(N):
    cost[i] = int(stdin.readline())

dp[0] = cost[0]
dp[1] = cost[0] + cost[1]
dp[2] = max(cost[0] + cost[2], cost[1] + cost[2], dp[1])

for i in range(3, N):
    dp[i] = max(dp[i-3] + cost[i-1] + cost[i], dp[i-2] + cost[i], dp[i-1])

print(dp[N-1])
