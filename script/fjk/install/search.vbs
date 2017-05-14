do
dim fs,s 
Set ws = CreateObject("Wscript.Shell")  
set fs=wscript.createobject("scripting.filesystemobject") 
ws.run "cmd /c netstat -n > search.txt",0
wscript.sleep(10000)'1000=1s
loop 