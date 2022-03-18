## 禁止Nox的恶心监控/收集数据

今天没事抓了个包，发现Nox居然在偷偷上传系统版本，语言，nox版本号，安卓版本等等的私人数据，而且居然还是用http协议传输，说好的“欧盟级别隐私保护”呢？...

因此，添加如下内容到hosts可以防止nox收集数据

```
127.0.0.1 www.bignox.com
127.0.0.1 bignox.com
127.0.0.1 api-new.bignox.com
127.0.0.1 api.bignox.com
127.0.0.1 launcher-api.bignox.com
```
