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

## Features

* Get direct link (to transit files' streams)
* List files (The files which will be listed need to be shared)

## Flags

```
GLOBAL OPTIONS:
   --listen value, -l value              gdrive-proxy listen address (default: ":7788")
   --server-domain value, -d value       the domain you use to access this program (default: "127.0.0.1")
   --client-secret-file value, -s value  oauth2 client secret (default: "client_secret.json")
   --no-list-handler                     disable list handler
   --reset-credential                    reset user credential
   --config value, -c value              config from json file, will override the command from shell
   --help, -h                            show help
   --version, -v                         print the version
```

## TODO

- [ ] Transit uploading streams

## Binary

**Download binary**: [GO](http://mainserver.c4o.me:7788/download?id=0B37Qovaa8LUeSU5iZks1NG1MLWM)

## Full Usage

* _**GET**_ `http://<ip-addr>:7788/list` List files that has been shared
* _**GET**_ `http://<ip-addr>:7788/download` Download files
* * _**Param**_ **ID** Download file by ID

## Direct link test :)

![](http://mainserver.c4o.me:7788/download?id=0B37Qovaa8LUeZTV6TGtWaTZzZ2M)
