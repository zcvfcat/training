from sys import stdin
N, L = int(stdin.readline()), list(map(int, stdin.readline().split()))
dp = [[0 for _ in range(N)] for _ in range(N)]

for i in range(N):
    dp[i][i] = 1
    if i < N-1 and L[i] == L[i+1]:
        dp[i][i+1] = 1

for e in range(1, N):
    for s in range(1, e+1):
        if L[e] == L[e-s] and dp[e-s+1][e-1]:
            dp[e-s][e] = 1
            ##
            for _ in range(len(dp)):
                print(dp[_])
            print()
            print("L : ", L)
            print('S : {}'.format(e-s))
            print('E : {}'.format(e))
            print()


M = int(stdin.readline())
for _ in range(M):
    S, E = map(int, stdin.readline().split())
    # print(dp[S-1][E-1])
