# Bilibili 个性装扮抢购工具

本 Python 3.6+ 工具可以利用 Bilibili API，进行自动化的会员装扮抢购。

目前仅支持：

* 永久装扮抢购
* B 币支付（这意味着：必须在抢购前先充值 B 币）

使用前请先用手机抓包，填写脚本前部分的信息：

* `COOKIE_CREATE`: 创建订单使用的 COOKIE，可以通过还没有充值 B 币时创建订单抓包获取。（TIPS: 请求地址是 `https://api.bilibili.com/x/garb/trade/create`）
* `COOKIE_PAY`：支付订单使用的 COOKIE，可以通过还没充值 B 币时尝试支付订单获取。（TIPS: 请求地址是 `https://pay.bilibili.com/payplatform/pay/pay`）
* `CSRF`：创建订单时的一个 POST 参数，可以通过抓订单创建包获取。
* `ITEM_ID`：你要买的装扮的 ID。
* `BUY_NUM`：要购买的数量。（注：加大此项可以在有 B 币的情况下抓包）
* `BUVID`：通过尝试支付抓包可以获得。
* `DEVICE_ID` 和 `DEVICE_FINGERPRINT`：通过尝试支付抓包可以获得。
* `BUILDID`：通过尝试支付抓包可以获得。
* `UA_CREATE` 和 `UA_PAY`：分别抓创建订单包和支付包可以获得。

最后 `time.sleep(1)` 可以自行调整循环间隔，单位是 `second`。注意不要设置太低，否则可能被封。另外，建议在抢购开始前 10-20 秒开启本脚本，防止被封。

最后，Good Luck~
