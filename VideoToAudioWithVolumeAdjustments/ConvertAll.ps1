# This script is used to convert all .flv and .mp4 files in a folder to .mp3, and automatically adjust volume to ~23 LUFS.
# Put `ffmpeg.exe` in the same folder where this PowerShell script lies in.

Get-ChildItem | Where-Object {$_.Extension -eq ".mp4" -or $_.Extension -eq ".flv"} | ForEach-Object { ./ffmpeg.exe -i $_.Name -af "loudnorm=print_format=summary" -vn -sn -dn -f mp3 -ab 192000 ($_.BaseName + ".mp3")}
