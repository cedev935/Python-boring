@echo off
title �ϴ�
cd /d %~dp0
echo ��������Ҫ�ϴ����ļ���(��·����
set /p upload_choice=�������Enterȷ�� :
echo ��������Ҫ�ϴ������̵�λ�ã�
set /p wangpan=�������Enterȷ�� :
pcs upload "%upload_choice%" "%wangpan%"
echo �ϴ���ϣ��밴������ص�������
pause > nul
start setup.bat
exit

