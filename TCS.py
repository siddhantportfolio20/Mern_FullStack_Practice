# # n = list(map(int,input("ENter a number").split()))
# # sum = 0
# # for i in range(0,len(n)-1):
# #     sum += n[i]

# # print(sum)

# n=[10, 20, 5, 8, 20]
# # even = 0
# # odd = 0
# # for i in range(0,len(n)):
# #     if(n[i]%2==0):
# #         even+=1
# #     else:
# #         odd+=1
# # print("even",even)
# # print("odd",odd)
# n.sort()

# print(n[len(n)-1])

# arr=[10, 20, 5, 8, 20]


# for i in range(0,len(arr)):
#     for j in range(i+1,len(arr)):
#         if(arr[i]<arr[j]):
#             arr[i],arr[j]=arr[j],arr[i]
            
# print(arr[1])

# str = "hello world python"
# newstr = ""
# for i in range(len(str)-1,-1,-1):
#     newstr+=str[i]
    
# print(newstr)

# n = 121
# r = str(n)

# w = r[::-1]
# if(int(w)==int(n)):
#     print("yes")
# else:
#     print("no")
    
    

# n = 121
# r = list(str(n))


# w = "".join(r[::-1])

# if(int(w)==int(n)):
#     print("yes")
# else:
#     print("no")


# a = "aaabbc"
# b={}
# for i in range(0,len(a)):
#     if(a[i] not in b):
#         b[a[i]]=1      
#     else:
#         b[a[i]]+=1

# for key in b:
#     print(key,"=",b[key])
    
# for key, value in b.items():
#     print(key, "=", value)

# m,n = map(int,input().split())
# print(n)
# arr = []
# for i in range(n):
#     row = list(map(int,input().split()))
#     arr.append(row)
# print(m)
# print(arr)

# n = 5
# arr = [1, 2, 3 ,4, 5]
# k = 2
# store = []
# for i in range(n,-1):
#     for j in range(i,k):
#         store.push(arr[i][j])
        
# print(store)

n = 5
arr = [1, 2, 3, 4, 5]
k = 2

store = []

# first part (k to n)
for i in range(k, n):
    store.append(arr[i])

# second part (0 to k-1)
for i in range(0, k):
    store.append(arr[i])

print(store)