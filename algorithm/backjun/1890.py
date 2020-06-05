n = int(input())
maps = [list(map(int, input().split())) for _ in range(n)]

table = [[0 for _ in range(n)] for _ in range(n)]

table[0][0] = 1

for y in range(n):
    for x in range(n):
        if table[y][x] != 0 and maps[y][x] != 0:
            if y + maps[y][x] < n:
                table[y + maps[y][x]][x] += table[y][x]
            if x + maps[y][x] < n:
                table[y][x + maps[y][x]] += table[y][x]

print(table[-1][-1])