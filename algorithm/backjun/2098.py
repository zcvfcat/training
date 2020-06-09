import sys
 
N=int(sys.stdin.readline())
W=[]
INF=sys.maxsize
for _ in range(N):
    W.append(list(map(int,sys.stdin.readline().split())))
DP=[[None]*(1<<N) for _ in range(N)]
 
def find_path(last,visited):#현재위치
    if visited == (1<<N)-1:  # 모두 방문햇다면
        return W[last][0] or INF  # 0으로 가는방법 반환 없으면 INF반환
 
    if DP[last][visited] is not None:  # 이미 계산되어잇다면
        return DP[last][visited]  # 있는값 반환
 
    tmp=INF
    for city in range(N):#모든 도시에서
        if visited & (1 << city) == 0 and W[last][city] != 0:#아직 방문하지 않았고 cur->i로 가는길이 있다면
            tmp=min(tmp,
                    find_path(city,visited | (1<<city)) + W[last][city])
    DP[last][visited]=tmp
    return tmp
 
 
print(find_path(0,1<<0))