from sys import stdin
N = int(stdin.readline())
dp = [0, 1, 2, 3] + [0] * N

for i in range(3, N+1):
    dp[i] = dp[i-1] + dp[i-2]

print(dp[N] % 10007)
