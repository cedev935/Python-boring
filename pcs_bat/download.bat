@echo off
title 下载
echo 您现在所在的网盘位置是(如需更改目录请关闭该窗口然后重新打开setup.bat进入更改目录环节)
pcs pwd
echo 请按任意键查看该目录下的文件(找到您要下载的文件名，如果第一页没有按y继续，找到以后按n退出。）
pause > nul
pcs ls
echo 请输入您要下载的文件名：
set /p download_choice=按完后请Enter确定 :
echo 请输入您要下载文件到的地方：
set /p baocun=按完后请Enter确定 :
pcs download "%download_choice%" "%baocun%%download_choice%"
echo 下载完毕，请按任意键回到主界面
pause > nul
start setup.bat
exit

