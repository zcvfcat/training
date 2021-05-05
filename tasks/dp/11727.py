n = int(input())
dp = [0, 1, 3]

if(n >= 3):
    for i in range(3, n + 1):
        dp.append(dp[n-1]+2*dp[n-2])

print(dp[n] % 10007)
