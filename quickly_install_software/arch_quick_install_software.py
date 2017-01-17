VERSION="0.1.0-alpha"
RELEASE_DATE="20170116"
import os,urllib.request,re,sys,requests,urllib.request
print ('欢迎使用Arch软件快速安装工具,本程序能快速帮您安装国内的软件. 当前运行的版本为' + VERSION + " / " + RELEASE_DATE)
print ('输入1安装QQ')
print ('输入2安装百度云盘')
print ('输入3安装vim快速配置')
print ('输入4安装wine rar（当系统自带解压缩软件遇到乱码时使用）')
print ('输入5安装经典wine扫雷')
print ('输入6安装maya')
print ('输入7安装vmware')
print ('请输入选项')
choice = input()
if choice == "1":
	print ('请输入您想编安装的wineqq版本')
	print ('输入1安装deepin的crossover-qq8.1')
	print ('输入2安装清风wineqq')
	print ('输入3安装国际版wineqq5.0')
	print ('输入4安装winetm2013')
	print ('请选择')
choice_qq = input()
if choice_qq == "1":
	print ('正在下载安装中，请稍等....')
	print ('本程序暂不支持显示进度，本文件大小大约为60M，如需查看进度，可打开系统监视器查看下载速度')
	urllib.request.urlretrieve("http://mirrors.ustc.edu.cn/deepin/pool/non-free/c/crossover-15/crossover-15_15.0.5-1_i386.deb", "deepin_crossover.deb")
	print ('下载完毕，正在准备安装')
	
