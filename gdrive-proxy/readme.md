# GDrive-Proxy

**Use your vps to transit Drives' files stream**

## Usage
First, start the program.

Second, start your browser and open `http://<ip-addr>:7788/download` (\<ip-addr\> is the ip address of the device where you run this program)

Then, in the console, a link will be printed, use your browser to open it and finish the authentication process, a code will finally show on your browser, copy it to the console and press \<Enter\>.

After finishing all these steps, you can download file by:

```
GET http://<ip addr>:7788/download?id=<FileID>
```
