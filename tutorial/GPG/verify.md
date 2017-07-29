# 使用GPG验证签名

## 1.1 导入公钥

### 1.1.1 下载公钥文件并导入到GPG

`gpg --import <公钥文件位置>`

**Example**

```
PS C:\Users\Jack\Desktop> gpg --import c4osopub.asc
gpg: C:/Users/Jack/AppData/Roaming/gnupg/trustdb.gpg: trustdb created
gpg: key 67D4E518: public key "Class04OpenSourceOrganization <Class04OpenSourceOrganization@github.com>" imported
gpg: Total number processed: 1
gpg:               imported: 1  (RSA: 1)
PS C:\Users\Jack\Desktop>
```

导入工作完成。

### 1.1.2 设置信用级别

#### 1.1.2.1 查看公钥的指纹

`gpg --list-keys`

**Example**

```
C:\Users\Jack>gpg --list-keys
C:/Users/Jack/AppData/Roaming/gnupg/pubring.gpg
-----------------------------------------------
pub   2048R/67D4E518 2017-07-28
uid       [ unknown] Class04OpenSourceOrganization <Class04OpenSourceOrganization@github.com>
```

在这里，`67D4E518`就是对应`Class04OpenSourceOrganization`这个公钥文件的指纹。

#### 1.1.2.2 设置信任

**警告** 请勿对你不信任的公钥执行下面的操作。

`gpg --edit-key <密钥指纹> trust`

然后进入交互模式，输入`5`并回车，然后输入`y`并回车。

至此完成签名导入，输入`q`回车退出交互界面。

## 1.2 验证

### 1.2.1 进行验证

`gpg -verify <sign_file_name(.sig or .asc)>`

**Example**

```
C:\Users\Jack\Documents>gpg --verify multiget.db.sig
gpg: assuming signed data in 'multiget.db'
gpg: Signature made 07/29/17 15:11:48 中国标准时间 using RSA key ID 67D4E518
gpg: Good signature from "Class04OpenSourceOrganization <Class04OpenSourceOrganization@github.com>" [ultimate]
```

这里验证成功，是来自`Class04OpenSourceOrganization <Class04OpenSourceOrganization@github.com>`的有效签名。

# 故障排除

## 1 签名与文件不位于同一目录

```
C:\Users\Jack\Documents>gpg --verify multiget.db.sig
gpg: no signed data
gpg: can't hash datafile: No data
```
* 问题：签名与文件不位于同一目录
* 解决：将签名文件（通常是.sig后缀）与要验证的文件放于同一目录

## 2 签名参数错误

```
C:\Users\Jack\Documents>gpg --verify multiget.db
gpg: no valid OpenPGP data found.
gpg: the signature could not be verified.
Please remember that the signature file (.sig or .asc)
should be the first file given on the command line.
```

* 问题：签名与文件不位于同一目录（`--verify multiget.db`)，参数必须是签名而不是文件本身。
* 解决：将文件名改成签名的文件名（`--verify multiget.db.sig`）
