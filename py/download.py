import os,urllib.request,re,sys,requests

print ('欢迎使用arch安装向导获取器')
beta_github = requests.get("https://raw.githubusercontent.com/redapple0204/my-boring-python/master/tmp/version-beta")
print('目前最新的测试版本是', beta_github.text)
stable_github = requests.get("https://raw.githubusercontent.com/redapple0204/my-boring-python/master/tmp/version-stable")
print('目前最新的稳定版本是', stable_github.text)
print('请输入您要下载的版本（1为测试版，2为稳定版）: ')
userVersion = input()
if userVersion == "1":
    print('正在下载中.....')
    fpath = os.getcwd()
    os.chdir(fpath)
    beta_link = requests.get("https://raw.githubusercontent.com/redapple0204/my-boring-python/master/tmp/version-beta-link")
    data = urllib.request.urlopen(beta_link.text).read()
    with open("arch-install-guide-beta.doc", 'wb') as f:
        f.write(data)
    print('下载完毕！请查看本目录生成的arch-install-guide-beta.doc')
elif userVersion == "2":
    print('正在下载中....')
    fpath = os.getcwd() # can be same
    os.chdir(fpath)
    stable_link = requests.get("https://raw.githubusercontent.com/redapple0204/my-boring-python/master/tmp/version-stable-link")
    data = urllib.request.urlopen(stable_link.text).read()
    with open("arch-install-guide.doc", 'wb') as f:
        f.write(data)
    print('下载完毕！请查看本目录生成的arch-install-guide-stable.doc')
else:
     print("Error: Please enter 1 or 2")
     exit()

# 之所以恢复这个文档，是因为有时候我写程序下载文件的时候还要参考一下。
