@echo off
title �����ļ���
echo ��ʾ�����ص��ļ��лᱻ������ص���ǰĿ¼�¡�
echo ���������ڵ�����λ����(�������Ŀ¼��رոô���Ȼ�����´�setup.bat�������Ŀ¼����)
pcs pwd
echo �밴������鿴��Ŀ¼�µ��ļ�(�ҵ���Ҫ���ؼе����֣������һҳû�а�y�������ҵ��Ժ�n�˳�����
pause > nul
pcs ls
echo ��������Ҫ���ص��ļ��е����֣�
set /p download_choice=�������Enterȷ�� :
pcs synch -cd "%cd%" "%download_choice%" 
echo ������ϣ��밴������ص�������
pause > nul
start setup.bat
exit

