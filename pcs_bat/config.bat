@echo off
title �˺ź��̹߳���

echo �����ڵ�¼���̵��˺���
pcs who
echo ---------------------------------------
echo ��½�밴1���������벻����ʾ)
echo �����߳��밴�س�
echo �˳��밴2
echo ---------------------------------------
set /p mm=�������Enterȷ�� :
if %mm%==1 pcs login & start setup.bat & exit
if %mm%==2 pcs logout & start setup.bat & exit

echo �̲߳ο���
echo ��10m��5�߳�
echo ��50m��10�߳�
echo ��100m��25�߳�
echo ��500m��40�߳�
echo ��1G��70-80�߳�
echo ��2G��100�̣߳����Ҳ��ֻ������100�̣߳�
set /p mm=��������Ҫ���õ��߳�
pcs set --max_thread=%mm%
echo ������������˵�
pause > nul 
start setup.bat
exit


