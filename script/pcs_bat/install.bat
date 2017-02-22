@echo off
%1 %2 
ver|find "5.">nul&&goto :st 
mshta vbscript:createobject("shell.application").shellexecute("%~s0","goto :st","","runas",1)(window.close)&goto :eof 
:st 
copy "%~0" "%windir%\system32\" 
cd /d %~dp0
cls

title 安装破解百度云限速主程序

echo 本自动安装程序只支持win vista+的系统，如果您是xp系统请自己下载这个压缩文件然后解压到C:\windows\system32里:https://github.com/GangZhuo/BaiduPCS/releases/download/0.2.5/pcs-win32-0.2.5-db684dc.zip

pause
copy pcs.exe %windir%\system32\



echo 安装完毕,请按任意键返回主程序
pause 
start setup.bat
exit