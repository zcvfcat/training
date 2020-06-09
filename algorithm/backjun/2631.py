n = int(input())
arr = [int(input()) for _ in range(n)]
dp = [0 for _ in range(n)]
dp[0] = 1
MAX = 0

for i in range(1, n):
    for j in range(0, i):
        if arr[i] > arr[j]:
            MAX = max(MAX, dp[j])
    dp[i] = MAX + 1
    MAX = 0

print(n - max(dp))
