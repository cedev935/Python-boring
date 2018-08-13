# Python 3.x

'''

This script helps you check and get INTERNET connection.

'''

import requests,json

def check_international_connection():
    req = requests.get('https://www.google.com/ncr')
    if req.status_code != 200 :
        return False
    elif req.status_code == 200:
        return True
    return False

def check_national_connection():
    req = requests.get('https://www.baidu.com')
    if req.status_code != 200 :
        return False
    elif req.status_code == 200:
        return True
    return False

def get_international_ip_address_location():
    ip = requests.get('https://ifconfig.co/ip').text[:-1]
    country = requests.get('https://ifconfig.co/country').text[:-1]
    return ip, country

def get_national_ip_address_location():
    mixed_json_data = requests.get('https://pv.sohu.com/cityjson?ie=utf-8').text[19:-1]
    dic_data = json.loads(mixed_json_data)
    ip_addr = dic_data["cip"]
    location = dic_data["cname"]
    return ip_addr, location


is_has_national_conn = check_national_connection()
is_has_international_conn = check_international_connection()

international_ip, international_country = get_international_ip_address_location()

national_ip, national_location = get_national_ip_address_location()

if is_has_national_conn:
    print("[提示] 中国国内网络连接测试 - 成功")
else:
    print("[提示] 中国国内网络连接测试 - 失败")

if is_has_international_conn:
    print("[提示] 国际互联网测试 - 成功")
else:
    print("[提示] 国际互联网测试 - 失败")

if is_has_international_conn and is_has_national_conn != True:
    print("[提示] 您似乎没有互联网连接，请检查网络")


if is_has_international_conn == False and is_has_national_conn == True:
    print("[提示] 您看起来像在中国大陆，并且不拥有国际互联网连接，准备测试 IP ...")
    if international_ip == national_ip:
        print("[提示] 访问国内或国际 IP 均是: " + national_ip)
        if international_country == 'China':
            print("[提示] 这个 IP 的归属地是 中国大陆")
            print("[提示] 您需要一些工具获得国际互联网连接")
        else:
            print("[提示] 这就很有趣了，你不在中国，不能访问国际互联网，居然可以访问中国网络")
    else:
        if international_country != "China":
            print("[提示] 这就很有趣了，你不能访问国际互联网居然还有国际 IP")
        else:
            print("[提示] 迷之，你不可以访问国际网络，你的 IP 还是国际的......")

if is_has_international_conn == True and is_has_national_conn == True:
    print("[提示] 看起来您可以连接真正的互联网，正在进行 IP 测试 ...")
    if national_ip != international_ip:
        print("[提示] 您似乎正处于分流代理模式（白名单）")
    elif national_ip == international_ip and international_country == "China":
        print("[提示] 您似乎正处于分流代理模式（黑名单）")
    elif national_ip == international_ip and international_ip != "China":
        print("[提示] 您似乎不在中国或在使用全局模式")

print("连接到国际互联网的 IP: " + international_ip + " 国家（或地区）：" + international_country)
print("连接到中国互联网的 IP: " + national_ip + " 位置：" + national_location)
