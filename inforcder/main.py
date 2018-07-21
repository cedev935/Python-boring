# Python 3.x
import sqlite3,time,psutil


def get_database_obj():
    conn = sqlite3.connect("infobase.db")
    return conn
    
connn = get_database_obj()
c = connn.cursor()

while True:
    timestamp = int(time.time())
    cpusage = psutil.cpu_percent()
    cpufreq = psutil.cpu_freq()[0]
    
    memoryava = psutil.virtual_memory()[0]
    memoryperc = psutil.virtual_memory()[2]
    
    c.execute("INSERT INTO CPUDATA (ID,TIMESTAMP,CPUUSAGE,CPUFREQ) \
            VALUES (NULL,"+str(timestamp)+","+str(cpusage)+","+str(cpufreq)+")")
            
    c.execute("INSERT INTO MEMORYDATA (ID,TIMESTAMP,MEMAVAILABLE,MEMPERCENT) \
            VALUES (NULL,"+str(timestamp)+","+str(memoryava)+","+str(memoryperc)+")")
    connn.commit()
    
    time.sleep(1)
