## 修复某些tcp软件在win7及更低系统下上传速度低的问题

当在低于或等于win7的系统上使用某些tcp软件时，可能会出现上传速度只有5Mbps的情况

### 解决方案

打开注册表，定位到HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\AFD\Parameters，新建一个DefaultSendWindow的值，设定**十六进制**为10000，重启系统即可

> 注：若出现单线程下载速度无法跑满的情况，打开注册表编辑器，定位到HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\AFD\Parameters，新建一个DefaultReceiveWindow的值，设定**十六进制**为20000，重启系统即可

### 可能会出现的副作用以及解决方案

偶见系统无法上网，右下角网络中心出现黄色感叹号，此为玄学问题，可能的解决方案有：

1.打开ctcp

> netsh interface tcp set global congestionprovider=ctcp

2.调节接收窗口自动调谐级别

> netsh int tcp set global autotuninglevel=normal
