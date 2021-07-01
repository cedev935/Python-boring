# Python 3.5+

import sys
import os
from pathlib import Path, PurePath
import hashlib
import sqlite3
from datetime import datetime
from humanize import naturalsize

if len(sys.argv) != 2:
    print("[FATAL] Usage: python hashcheck.py <directory>")
    sys.exit(1)

BUF_SIZE = 65536
HASH_DIR = sys.argv[1]
DB_NAME = 'hashdb.db'

# SHA256 a file
def file_sha256sum(filename):
    sha256sum = hashlib.sha256()
    with open(filename, 'rb') as f:
        while True:
            data = f.read(BUF_SIZE)
            if not data:
                break
            sha256sum.update(data)
    return sha256sum

def format_time(utime):
    return datetime.utcfromtimestamp(int(utime)).strftime('%Y-%m-%d %H:%M:%S')

database_conn = sqlite3.connect(DB_NAME)
database_cur = database_conn.cursor()
print("[INFO] Connected to the database.")

no_match_file = []

for file in Path(HASH_DIR).rglob('*'): # Recursively walk through directories
    if file.is_file():
        file_sha256_checksum = file_sha256sum(PurePath(file))

        database_cur.execute("select * from sha256sum where sha256sum=:sha256", {"sha256": file_sha256_checksum.hexdigest()})
        hashobj = database_cur.fetchall()

        if hashobj:
            print("[INFO] MATCH -> {} ".format(PurePath(file)))
        else:
            print("[INFO] UNMATCH -> {} ; SHA256: {}; SIZE: {}; CREATE_TIME(UTC): {}; LAST_CHANGE_TIME(UTC): {}".format(PurePath(file), 
                                                                                                                        file_sha256_checksum.hexdigest(),
                                                                                                                        naturalsize(os.path.getsize(PurePath(file))),
                                                                                                                        format_time(os.path.getctime(PurePath(file))),
                                                                                                                        format_time(os.path.getmtime(PurePath(file)))))
            no_match_file.append((file.name, file_sha256_checksum.hexdigest()))

if no_match_file and input("Insert unmatched file? (YES to insert): ") == "YES":
    database_cur.executemany("insert into sha256sum values (?, ?)", no_match_file)
    database_conn.commit()
    print("[INFO] Inserted unmatched file into database.")

if not no_match_file:
    print("[INFO] All file matched.")

database_conn.close()
print("[INFO] Disconnected from the database.")