# !!!WARNING!!!
# ALTHOUGH THE NAME OF THE SCRIPT IS 'ENCRYPTED_CALL', YOUR DATA **IS NOT** ENCRYPTED. IT CANNOT PROVIDE CONFIDENTIALITY / INTERGRITY / AUTHENTICITY **AT ALL**.

import base64

shit_text = input("Function input: ")

function_map = {'a': '哈', 'A': '草',
                'b': '看', 'B': '日',
                'c': "行", 'C': '天',
                'd': '开', 'D': '地',
                'e': '了', 'E': '水',
                'f': '发', 'F': '火',
                'g': '吗', 'G': '啦',
                'h': '是', 'H': '就',
                'i': '的', 'I': '您',
                'j': '地', 'J': '给',
                'k': '等', 'K': '母',
                'l': '么', 'L': '子',
                'm': '和', 'M': '或',
                'n': '人', 'N': '新',
                'o': '非', 'O': '海',
                'p': '跌', 'P': '普',
                'q': '吖', 'Q': '桶',
                'r': '爽', 'R': '科',
                's': '哦', 'S': '学',
                't': '尼', 'T': '靠',
                'u': '金', 'U': '！',
                'v': '熊', 'V': '，',
                'w': '考', 'W': '。',
                'x': '零', 'X': '；',
                'y': '吧', 'Y': '’',
                'z': '大', 'Z': '‘',
                '1': '噢', '2': '付',
                '3': '刺', '4': '楼',
                '5': '匿', '6': '呵',
                '7': '辣', '8': '嘿',
                '9': '亮', '0': '无',
                '+': '从', '/': '杠', '=': '取'}

map_reversed = {v: k for k, v in function_map.items()}

b64text = ""

for x in shit_text:
    b64text = b64text + map_reversed[x]


print("\r\n \r\n")
print("Function output: ")
print(base64.b64decode(b64text.encode()).decode())
