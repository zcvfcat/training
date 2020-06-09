n, m = map(int, input().split())
lst = [list(map(int, list(input().rstrip()))) for _ in range(n)]
ans = 0

for i in range(n):
    for j in range(m):
        if i > 0 and j > 0 and lst[i][j] == 1:
            lst[i][j] += min(lst[i - 1][j], lst[i][j - 1], lst[i - 1][j - 1])
        ans = max(ans, lst[i][j])

print(ans * ans)
