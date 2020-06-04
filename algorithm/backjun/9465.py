t = int(input())
for i in range(t):
    d = []
    n = int(input())

    for k in range(2):
        d.append(list(map(int,input().split())))

    d[0][1] += d[1][0]
    d[1][1] += d[0][0]

    for j in range(2,n):
        d[0][j] += max(d[1][j-1], d[1][j-2])
        d[1][j] += max(d[0][j-1], d[0][j-2])

    print(max(d[0][n-1],d[1][n-1]))