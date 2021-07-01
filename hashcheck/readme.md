# HashCheck

本 Python 脚本将帮助检查数据完整性。

使用：

第一次使用时请

`python hashcheck_init.py` 创建核验数据库。


遍历检查 `<directory>` 中的每个文件（包含子文件夹中的文件）是否符合数据库中任意一条 `SHA256` 数据，并返回结果：

`python hashcheck.py <directory>`

通过程序提示可以选择是否把未匹配的文件插入数据库。
