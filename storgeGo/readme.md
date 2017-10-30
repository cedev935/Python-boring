# storgeGo - A key-value storge API

**The data is storged in the RAM!**

## API

### Create or change a storge

**POST** /change

#### Params

* key= \<key>
* value= \<value>

### Read a storge

**GET** /get

#### Params

* key: \<key>

### Delete a storge

**GET** /delete

#### Params

* key: \<key>

### List all storage

**GET** /list

### Sync from another node

**GET** /sync

#### Params

* apiaddr: the ip address of another node


