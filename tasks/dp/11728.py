import sys
input = sys.stdin.readline
 
n, m = map(int, input().split())
nmlist = list(map(int, input().split())) + list(map(int, input().split()))
print(' '.join(map(str, sorted(nmlist))))
