@echo off
title ����
echo ���������ڵ�����λ����(�������Ŀ¼��رոô���Ȼ�����´�setup.bat�������Ŀ¼����)
pcs pwd
echo �밴������鿴��Ŀ¼�µ��ļ�(�ҵ���Ҫ���ص��ļ����������һҳû�а�y�������ҵ��Ժ�n�˳�����
pause > nul
pcs ls
echo ��������Ҫ���ص��ļ�����
set /p download_choice=�������Enterȷ�� :
echo ��������Ҫ�����ļ����ĵط���
set /p baocun=�������Enterȷ�� :
pcs download "%download_choice%" "%baocun%%download_choice%"
echo ������ϣ��밴������ص�������
pause > nul
start setup.bat
exit

