## 修复 Vmware 虚拟机内部重启报错

当使用虚拟磁盘格式为vhd且vmware版本高于16.2.0时，在虚拟机内部重启会触发如下报错

```
恢复虚拟磁盘“nvme0:0”失败。在拍摄快照或挂起虚拟机后，已修改该磁盘。

某个操作需要虚拟机处于静默状态，该虚拟机无法继续运行。
```

**解决方案**

将vmware版本降至v16.1.2即可