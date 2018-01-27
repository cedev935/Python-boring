
import sys,os
import time

def view_bar(num, total):
  rate = num / total
  rate_num = int(rate * 100)
  r = '\r[%s%s]%d%%' % ("="*num, " "*(100-num), rate_num, )
  sys.stdout.write(r)
  sys.stdout.flush()

bfb = open("/home/redapple/.holiday/bfb.txt", "r").read()

if __name__ == '__main__':
    i = int(bfb)
    time.sleep(0.1)
    view_bar(i, 100)

