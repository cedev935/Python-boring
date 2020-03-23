# Python 3.x
import sqlite3

conn = sqlite3.connect("infobase.db")

print("[INFO] Successfully connected to database.")

c = conn.cursor()
c.execute('''CREATE TABLE CPUDATA
            (ID       INTEGER       PRIMARY KEY,
            TIMESTAMP INTEGER       NOT NULL,
            CPUUSAGE  REAL          NOT NULL,
            CPUFREQ   REAL          NOT NULL);''')
c.execute('''CREATE TABLE MEMORYDATA
            (ID          INTEGER       PRIMARY KEY,
            TIMESTAMP    INTEGER       NOT NULL,
            MEMAVAILABLE INTEGER       NOT NULL,
            MEMPERCENT   REAL          NOT NULL);''')

conn.commit()
conn.close()
print("[INFO] Finished initing database.")
            
            
