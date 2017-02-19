@echo off
title 上传
cd /d %~dp0
echo 请输入您要上传的文件：(带路径）
set /p upload_choice=按完后请Enter确定 :
echo 请输入您要上传到网盘的位置：
set /p wangpan=按完后请Enter确定 :
pcs upload "%upload_choice%" "%wangpan%"
echo 上传完毕，请按任意键回到主界面
pause > nul
start setup.bat
exit

