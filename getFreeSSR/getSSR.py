import requests,re

def getFormatData(siteURL):
    orginalData = requests.get(siteURL).text
    pattern = re.compile('ssr://.*')
    return re.findall(pattern, orginalData)

def returnSSRUrl(formatData):
    resultList = []
    for oneFormatData in formatData:
        targetLocation = oneFormatData.index("target")
        resultString = oneFormatData[:targetLocation - 2]
        resultList.append(resultString)
    return resultList

formatData = getFormatData("http://sstest.cc/shadowsocks%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7/")
for i in returnSSRUrl(formatData):
    print(i)