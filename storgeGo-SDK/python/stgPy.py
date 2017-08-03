# Python SDK of storgeGo API

import requests

class StorgeGoObject:
    def __init__(self, APIUrl):
        self.APIUrl = APIUrl

    def createOrChangeStorge(self, key, value):
        req = requests.post(self.APIUrl + "/change", data={'key': key, 'value': value})
        if req.text == "Succeeded":
            return 0 # 0 means it's successful to storge the data.
        else:
            return 1 # 1 means error to storge data.

    def readStorge(self, key):
        req = requests.get(self.APIUrl + "/get", params={'key': key})
        if req.status_code != 200:
            return 1 # 1 means error to storge data.
        else:
            return req.text
        
    def deleteStorge(self, key):
        req = requests.get(self.APIUrl + "/delete", params={'key': key})
        if req.text == "Succeeded":
            return 0 # means succeed to delete
        else:
            return 1 # means error to delete