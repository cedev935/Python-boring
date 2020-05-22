# Python 3.x
# Author: NeterOster (neteroster@gmail.com)
# THIS SOFTWARE IS UNDER **MIT License**

import requests,json,time

COOKIE_CREATE = ""
COOKIE_PAY = ""

CSRF = ""
ITEM_ID = ""
BUY_NUM = "1"
BUVID = ""
DEVICE_ID = ""
DEVICE_FINGERPRINT = ""
BUILDID = ""
ENV = "prod"
APP_KEY = "android"

UA_CREATE = ""
UA_PAY = ""

CREATE_API_URL = "https://api.bilibili.com/x/garb/trade/create"
PAY_API_URL = "https://pay.bilibili.com/payplatform/pay/pay"


# Function to construct and send "create" request
def send_create_request() -> requests.Response:

    # Construct request header
    create_request_headers: dict = {
        "native_api_from": "h5",
        "cookie": COOKIE_CREATE,
        "referer": "https://www.bilibili.com/h5/mall/suit/detail?navhide=1&id=" + ITEM_ID,
        "user-agent": UA_CREATE,
        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        "accept-encoding": "gzip"
    }

    # Construct request params
    create_request_params: dict = {
        "csrf": CSRF,
        "item_id": ITEM_ID,
        "platform": "android",
        "currency": "bp",
        "add_month": "-1",
        "buy_num": BUY_NUM
    }

    # Send request and return response
    create_response: requests.Response = requests.post(CREATE_API_URL, headers=create_request_headers, params=create_request_params)

    return create_response


# Construct and send pay request
def send_pay_request(req_body: str) -> requests.Response:

    # Construct request header
    pay_request_headers: dict = {
        "buvid": BUVID,
        "device-id": DEVICE_ID,
        "devicefingerprint": DEVICE_FINGERPRINT,
        "buildid": BUILDID,
        "env": ENV,
        "app-key": APP_KEY,
        "user-agent": UA_PAY,
        "content-type": "application/json",
        "accept-encoding": "gzip",
        "cookie": COOKIE_PAY
    }

    # Send request and return response
    pay_response: requests.Response = requests.post(PAY_API_URL, headers=pay_request_headers, data=req_body)
    return pay_response


# Just do it!
def single_order() -> requests.Response:
    create_resp: requests.Response = send_create_request()
    pay_data: dict = json.loads(create_resp.json()['data']['pay_data'])

    # Add necessary data to send pay request
    pay_data['payChannel'] = "bp"
    pay_data['payChannelId'] = "99"
    pay_data['network'] = "WiFi"

    # Lets go
    pay_resp: requests.Response = send_pay_request(json.dumps(pay_data))

    return pay_resp


while(True):
    try:
        order_req: requests.Response = single_order()
        print(order_req.text)
    except:
        print("Unknown Error: Can't create order now.")
    
    time.sleep(1)
