s1 = input().rstrip()
s2 = input().rstrip()
len_s1 = len(s1)
len_s2 = len(s2)

dp = [[''] * len_s2 for _ in range(len_s1)]

for i in range(len_s1):
    dp[i][0] = s2[0] if s2[0] == s1[i] else dp[i - 1][0]

for j in range(len_s2):
    dp[0][j] = s1[0] if s1[0] == s2[j] else dp[0][j - 1]

for i in range(1, len_s1):
    for j in range(1, len_s2):
        dp[i][j] = dp[i][j - 1] if len(dp[i][j - 1]) >= len(dp[i - 1][j]) else dp[i - 1][j]
        if s1[i] == s2[j] and len(dp[i - 1][j - 1]) >= len(dp[i][j]):
            dp[i][j] = dp[i - 1][j - 1] + s1[i]
            
ans = dp[-1][-1]
print(len(ans))
if len(ans) > 0:
    print(ans)
