N = int(input())
cost = [0] * N
dp = [0] * N
for i in range(N):
    cost[i] = list(map(int, input().split()))
dp[0] = cost[0]
for i in range(1, N):
    red = min(dp[i-1][1], dp[i-1][2]) + cost[i][0]
    green = min(dp[i-1][0], dp[i-1][2]) + cost[i][1]
    blue = min(dp[i-1][0], dp[i-1][1]) + cost[i][2]
    
    dp[i] = [red,green,blue]

print(min(dp[-1]))
