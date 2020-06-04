from sys import stdin
n = int(stdin.readline())
t = []
p = []
dp = []
for i in range(n):
    T, P = map(int, stdin.readline().split())
    t.append(T)
    p.append(P)
    dp.append(P)

dp.append(0)
for i in range(n - 1, -1, -1):
    if t[i] + i > n:
        dp[i] = dp[i + 1]
    else:
        dp[i] = max(dp[i + 1], p[i] + dp[i + t[i]])

print(dp[0])
