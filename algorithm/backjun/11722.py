from math import factorial

n, k = map(int, input().split())
v = factorial(n) // (factorial(k) * factorial(n - k))

print(v % 10007)
