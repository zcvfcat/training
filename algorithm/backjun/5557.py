n = int(input())
lst = list(map(int, input().split()))

dp1 = [0] * 21
dp2 = [0] * 21

dp1[lst[0]] = 1

for i in range(1, n - 1):
    for j in range(21):
        if j + lst[i] <= 20:
            dp2[j + lst[i]] += dp1[j]
        if j - lst[i] >= 0:
            dp2[j - lst[i]] += dp1[j]

    dp1 = dp2
    dp2 = [0] * 21

print(dp1[lst[-1]])
