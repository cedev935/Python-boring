@echo off
title 选择目录

echo 您现在所在的网盘目录是：
pcs pwd
echo 如果您现在的目录已经是您要下载文件的目录了，请输入yes回到主程序，否则请按回车。
set /p mm=按完后请Enter确定 :
if %mm%==yes setup.bat & exit
echo 请按任意键查看该目录下的文件(如果第一页找不到您要切换的目录请按y，如果找到了请按n）
pause > nul
pcs ls
echo 请输入您要切换到的目录(如果您要返回上一级请输入..)
set /p mm=按完后请Enter确定 :
pcs cd "%mm%"
%0

