def bisect(a, x, lo=0, hi=None):
    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo + hi) // 2
        if a[mid] < x:
            lo = mid + 1
        else:
            hi = mid
    return lo

n = int(input())
s = [*map(int, input().split())]
dp = [s[0]]

for i in range(1, n):
    if s[i] > dp[-1]:
        dp.append(s[i])
    else:
        dp[bisect(dp, s[i])] = s[i]

print(len(dp))
