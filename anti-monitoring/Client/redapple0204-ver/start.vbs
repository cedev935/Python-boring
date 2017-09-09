do
Set ws = CreateObject("Wscript.Shell")  
ws.run "cmd /c start get2.exe",0
wscript.sleep(1000)'1000=1s
loop