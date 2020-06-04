from sys import stdin
N = int(stdin.readline())
cost = list(map(int, stdin.readline().split()))
dp = [cost[0]]
for i in range(1, N):
    dp.append(max(dp[i-1] + cost[i], cost[i]))

print(max(dp))
