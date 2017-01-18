# Python 3.6+

VERSION="0.1.0-alpha"
RELEASE_DATE="20170118"

import json,os,urllib.request,platform

def readFile(filepth):
    with open(filepth) as f:
        data = f.read()
    return data
    
def pJson(jsonstr):
    jsonData = json.loads(jsonstr)
    return jsonData

def walkFiles(pth):
    result=[]
    for parent,dirnames,filenames in os.walk(pth):
        for filename in filenames:
            result.append(filename)
    return result
    
def downloadFiles(link, saveName):
    urllib.request.urlretrieve(link, f"./{saveName}")

def downloadAll(jsonD, platf):
    downlink = jsonD["install"]["download"][platf]
    for files in downlink:
        downloadFiles(files["link"], files["saveName"])
        
def runSteps(jsonD, platf):
    steps = jsonD["install"]["setup"][platf]
    for step in steps: exec(step)

def Emain():
    if platform.system() != ("Windows" or "Linux"):
        print("Sorry, this platform can't run the programme.")
        exit()
    print("Welcome to use autodown.py")
    print(f"Version: {VERSION} / {RELEASE_DATE}")
    print("Start an issue on https://github.com/redapple0204/my-boring-python/issues")
    print("==============================")
    print("Now the config files:")
    print("-----------------------")
    for fn in walkFiles("./install_config"):
        print(fn)
    print("-----------------------")
    install = input("Which do you want to run? Input the filename:")
    jData = readFile(f"./install_config/{install}")
    install_data = pJson(jData)
    print("Be careful! Some code in the config may be harmful. Check the code carefully.")
    print("------------START------------")
    print(jData)
    print("------------END--------------")
    next = input("Do you want to continue?[Y/n]")
    if next != "Y":
        exit()
    print("Downloading files...")
    downloadAll(install_data, platform.system())
    print("Download finished")
    print("Setting up...")
    runSteps(install_data, platform.system())
    print("Finished")

Emain()
