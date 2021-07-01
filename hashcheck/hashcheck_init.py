# Python 3.x

import sqlite3

DB_NAME = 'hashdb.db'

print("[INFO] Initializing hash database with name: {}.".format(DB_NAME))
conn = sqlite3.connect(DB_NAME)
cur = conn.cursor()

# Create table
cur.execute('''CREATE TABLE sha256sum
(filename text, sha256sum text)''')

conn.commit()
conn.close()
print("[INFO] Successfully initialized hash database.")
