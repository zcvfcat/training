N = int(input())
L = [int(input()) for _ in range(N)]

dp = [0 for _ in range(N)]

dp[0] = L[0]
dp[1] = dp[0] + L[1]
dp[2] = max(L[1] + L[2], L[0] + L[2])

for i in range(3, N):
    dp[i] = max(dp[i - 2] + L[i], dp[i - 3] + L[i] + L[i - 1])

print(dp[N - 1])
