@echo off
%1 %2 
ver|find "5.">nul&&goto :st 
mshta vbscript:createobject("shell.application").shellexecute("%~s0","goto :st","","runas",1)(window.close)&goto :eof 
:st 
copy "%~0" "%windir%\system32\" 
cd /d %~dp0
cls

title ��װ�ƽ�ٶ�������������

echo ���Զ���װ����ֻ֧��win vista+��ϵͳ���������xpϵͳ���Լ��������ѹ���ļ�Ȼ���ѹ��C:\windows\system32��:https://github.com/GangZhuo/BaiduPCS/releases/download/0.2.5/pcs-win32-0.2.5-db684dc.zip

pause
copy pcs.exe %windir%\system32\



echo ��װ���,�밴���������������
pause 
start setup.bat
exit