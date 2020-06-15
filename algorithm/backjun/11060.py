n = int(input())
m = [*map(int, input().split())]
dp = [-1] * n
dp[0] = 0

for i in range(0, n - 1):
    if dp[i] == -1:
        continue
    
    for j in range(1, m[i] + 1):
        if i + j >= n:
            break
        if dp[i + j] == -1 or dp[i + j] > dp[i] + 1:
            dp[i + j] = dp[i] + 1
print(dp[n - 1])
