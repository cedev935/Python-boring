@echo off
title 账号和线程管理

echo 您现在登录网盘的账号是
pcs who
echo ---------------------------------------
echo 登陆请按1（输入密码不会显示)
echo 设置线程请按回车
echo 退出请按2
echo ---------------------------------------
set /p mm=按完后请Enter确定 :
if %mm%==1 pcs login & start setup.bat & exit
if %mm%==2 pcs logout & start setup.bat & exit

echo 线程参考表：
echo ＜10m：5线程
echo ＜50m：10线程
echo ＜100m：25线程
echo ＜500m：40线程
echo ＜1G：70-80线程
echo ＞2G：100线程（最多也是只能设置100线程）
set /p mm=请输入您要设置的线程
pcs set --max_thread=%mm%
echo 任意键返回主菜单
pause > nul 
start setup.bat
exit


