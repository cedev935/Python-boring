@echo off
title ѡ��Ŀ¼

echo ���������ڵ�����Ŀ¼�ǣ�
pcs pwd
echo ��������ڵ�Ŀ¼�Ѿ�����Ҫ�����ļ���Ŀ¼�ˣ�������yes�ص������򣬷����밴�س���
set /p mm=�������Enterȷ�� :
if %mm%==yes setup.bat & exit
echo �밴������鿴��Ŀ¼�µ��ļ�(�����һҳ�Ҳ�����Ҫ�л���Ŀ¼�밴y������ҵ����밴n��
pause > nul
pcs ls
echo ��������Ҫ�л�����Ŀ¼(�����Ҫ������һ��������..)
set /p mm=�������Enterȷ�� :
pcs cd "%mm%"
%0

