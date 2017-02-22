@echo off
title 破解百度云限速

echo 欢迎使用百度云破解限速工具
echo 本工具有六个模块：安装主程序,账号和线程管理，切换目录，下载文件，下载文件夹，上传文件这六个模块，请先安装主程序，然后在下载文件前请先使用切换目录切换到你要下载的文件（夹）的目录，请一定要在下载前设置线程，否则下载速度将会很慢。
echo ---------------------------------------
echo 安装主程序请按1
echo 切换目录请按2
echo 下载文件请按3
echo 下载文件夹请按4 
echo 上传文件请按5
echo 账号和线程管理请按6
echo ---------------------------------------
set /p mm=按完后请Enter确定 :

if %mm%==1 start install.bat & exit
if %mm%==2 start choice.bat & exit
if %mm%==3 start download.bat & exit
if %mm%==4 start downloadwjj.bat & exit
if %mm%==5 start upload.bat & exit
if %mm%==6 start config.bat & exit