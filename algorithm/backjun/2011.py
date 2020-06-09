inputNum = input()
nums = [int(num) for num in list(inputNum)]

nc = [0] * (len(nums) + 1)
nc[0] = 1

for i in range(1, len(nums) + 1):
    if 1 <= nums[i - 1] and nums[i - 1] <= 9:
        nc[i] += nc[i - 1]

    if i == 1:
        continue

    temp = nums[i - 2] * 10 + nums[i - 1]
    if 10 <= temp and temp <= 26:
        nc[i] += nc[i - 2]

print(nc[-1] % 1000000)
