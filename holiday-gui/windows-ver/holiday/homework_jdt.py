bfb_raw = open(r"C:\Users\redapple\holiday\homework_bfb.txt", "r").read()
bfb = int(bfb_raw)
b = int((bfb)/2)
a = int(50-b)
if str(b) == "0":
	c = ("["+"-"*b+" "*a+"]"+str(bfb)+"%")
else:
	c = ("["+"-"*(b-1)+">"+" "*a+"]"+str(bfb)+"%")
print(c)
