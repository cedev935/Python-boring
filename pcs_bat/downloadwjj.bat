@echo off
title 下载文件夹
echo 提示：下载的文件夹会被打包下载到当前目录下。
echo 您现在所在的网盘位置是(如需更改目录请关闭该窗口然后重新打开setup.bat进入更改目录环节)
pcs pwd
echo 请按任意键查看该目录下的文件(找到您要下载夹的名字，如果第一页没有按y继续，找到以后按n退出。）
pause > nul
pcs ls
echo 请输入您要下载的文件夹的名字：
set /p download_choice=按完后请Enter确定 :
pcs synch -cd "%cd%" "%download_choice%" 
echo 下载完毕，请按任意键回到主界面
pause > nul
start setup.bat
exit

