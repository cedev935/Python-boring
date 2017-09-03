import urllib.request,os,time,re,easygui

haveShownMessage = False
dataLastTime = ""

def soundss(dt):
    os.system('echo CreateObject("SAPI.SpVoice").Speak "' + dt + '"' + ' > sound.vbs')
    os.system('start sound.vbs')

def decidetAction(dt):
    global haveShownMessage
    global dataLastTime
    if haveShownMessage:
        dataLastTime = dt
    else:
        soundss("WARNINGWARNING")
        easygui.msgbox("Monitering Detected.", "WARNING")
        haveShownMessage = True
        dataLastTime = dt

def decidefAction(dt):
    global haveShownMessage
    global dataLastTime
    if haveShownMessage:
        haveShownMessage = False
        soundss("NICENICE")
        easygui.msgbox("Safe Now.", "INFO")
        dataLastTime = dt
    else:
        dataLastTime = dt


monitoring = False

while True:
    response = urllib.request.urlopen('http://178.62.115.148:5032/get?key=out.txt')
    html = response.read().decode('utf-8') 
#if re.search(r'(.*)192.168.1.111(.*)ESTABLISHED(.*)', html):
    if re.search(r'119.28.63.164', html):
        decidetAction(html)
    else:
        decidefAction(html)
    time.sleep(1)
