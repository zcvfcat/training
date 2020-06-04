dp = [0] * 101
dp[1] = 1
dp[2] = 1

for i in range(0, 98):
    dp[i+3] = dp[i] + dp[i+1]

n = int(input())

for i in range(n):
    k = int(input())
    print(dp[k])
