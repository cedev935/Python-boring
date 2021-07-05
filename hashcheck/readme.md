# HashCheck

本 Python 脚本将帮助检查数据完整性。

## 依赖
* Python >3.5
* `humanize`: `pip install humanize`

## 使用


遍历检查 `<directory>` 中的每个文件（包含子文件夹中的文件）是否符合数据库 `<database>` 中任意一条 `SHA256` 数据（数据库不存在则自动创建），并返回结果：

`python hashcheck.py <directory> <database>`

通过程序提示可以选择是否把未匹配的文件插入数据库。

注意：`<database>` 只能是文件名称（当前目录），不要输入路径。
