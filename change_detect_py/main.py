from watchdog.observers import Observer
from watchdog.events import *
import time

MPATH = "C:\\"

class FileEventHandler(FileSystemEventHandler):
    def __init__(self):
        FileSystemEventHandler.__init__(self)
    
    def on_moved(self, event):
        if event.is_directory:
            print("[提示] 有目录被移动：从 {0} 到 {1}".format(event.src_path, event.dest_path))
        else:
            print("[提示] 有文件被移动：从 {0} 到 {1}".format(event.src_path, event.dest_path))
    
    def on_created(self, event):
        if event.is_directory:
            print("[提示] 有目录创建：{0}".format(event.src_path))
        else:
            print("[提示] 有文件创建：{0}".format(event.src_path))
    def on_deleted(self, event):
        if event.is_directory:
            print("[提示] 有目录被删除：{0}".format(event.src_path))
        else:
            print("[提示] 有文件被删除：{0}".format(event.src_path))
    def on_modified(self, event):
        if event.is_directory:
            print("[提示] 有目录修改：{0}".format(event.src_path))
        else:
            print("[提示] 有文件修改：{0}".format(event.src_path))
    
if __name__ == "__main__":
    observer = Observer()
    event_handler = FileEventHandler()
    observer.schedule(event_handler, MPATH, True)
    observer.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
