t = int(input())

for _ in range(t):
    n = int(input())
    c = [*map(int, input().split())]
    m = int(input())

    d = [0 for _ in range(m + 1)]
    d[0] = 1

    for coin in c:
        for m in range(coin, m + 1):
            d[m] = d[m] + d[m - coin]

    print(d.pop())
