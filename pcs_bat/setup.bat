@echo off
title �ƽ�ٶ�������

echo ��ӭʹ�ðٶ����ƽ����ٹ���
echo ������������ģ�飺��װ������,�˺ź��̹߳����л�Ŀ¼�������ļ��������ļ��У��ϴ��ļ�������ģ�飬���Ȱ�װ������Ȼ���������ļ�ǰ����ʹ���л�Ŀ¼�л�����Ҫ���ص��ļ����У���Ŀ¼����һ��Ҫ������ǰ�����̣߳����������ٶȽ��������
echo ---------------------------------------
echo ��װ�������밴1
echo �л�Ŀ¼�밴2
echo �����ļ��밴3
echo �����ļ����밴4 
echo �ϴ��ļ��밴5
echo �˺ź��̹߳����밴6
echo ---------------------------------------
set /p mm=�������Enterȷ�� :

if %mm%==1 start install.bat & exit
if %mm%==2 start choice.bat & exit
if %mm%==3 start download.bat & exit
if %mm%==4 start downloadwjj.bat & exit
if %mm%==5 start upload.bat & exit
if %mm%==6 start config.bat & exit