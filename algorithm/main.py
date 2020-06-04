from sys import stdin
n = int(stdin.readline())
cost = [0] + list(map(int, stdin.readline().split()))
dp = [0] * (n+1)

dp[1] = cost[1]

for i in range(2, n+1):
    for j in range(j+1):
        if dp[i] < dp[i-j] + cost[j]:
            dp[i] = dp[i-j] + cost[j]
print(dp[n])
