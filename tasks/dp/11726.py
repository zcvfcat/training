index = int(input())
dp = [0, 1, 2]

if(index >= 3):
    for i in range(3, index+1):
        dp.append(dp[i-1] + dp[i-2])

print(dp[index] % 10007)
