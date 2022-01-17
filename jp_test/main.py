# Python 3.x

# 日语五十音辅助训练系统
# Author: neteroster (Telegram: neteroster; E-Mail: neteroster@gmail.com)
# License: The MIT License

import random
import time

RECORD_FILENAME_HIRA = 'mistake-hirakana.txt'
RECORD_FILENAME_KATA = 'mistake-katakana.txt'
RECORD_FILENAME_MIXED = 'mistake-mixed.txt'

kana_map = [('あ', 'ア', 'a'), # （清音）现代五十音图对表
            ('い', 'イ', 'i'),
            ('う', 'ウ', 'u'),
            ('え', 'エ', 'e'),
            ('お', 'オ', 'o'),

            ('か', 'カ', 'ka'),
            ('き', 'キ', 'ki'),
            ('く', 'ク', 'ku'),
            ('け', 'ケ', 'ke'),
            ('こ', 'コ', 'ko'),

            ('さ', 'サ', 'sa'),
            ('し', 'シ', 'shi'),
            ('す', 'ス', 'su'),
            ('せ', 'セ', 'se'),
            ('そ', 'ソ', 'so'),

            ('た', 'タ', 'ta'),
            ('ち', 'チ', 'chi'),
            ('つ', 'ツ', 'tsu'),
            ('て', 'テ', 'te'),
            ('と', 'ト', 'to'),

            ('な', 'ナ', 'na'),
            ('に', 'ニ', 'ni'),
            ('ぬ', 'ヌ', 'nu'),
            ('ね', 'ネ', 'ne'),
            ('の', 'ノ', 'no'),

            ('は', 'ハ', 'ha'),
            ('ひ', 'ヒ', 'hi'),
            ('ふ', 'フ', 'fu'),
            ('へ', 'ヘ', 'he'),
            ('ほ', 'ホ', 'ho'),

            ('ま', 'マ', 'ma'),
            ('み', 'ミ', 'mi'),
            ('む', 'ム', 'mu'),
            ('め', 'メ', 'me'),
            ('も', 'モ', 'mo'),

            ('や', 'ヤ', 'ya'),
            ('ゆ', 'ユ', 'yu'),
            ('よ', 'ヨ', 'yo'),

            ('ら', 'ラ', 'ra'),
            ('り', 'リ', 'ri'),
            ('る', 'ル', 'ru'),
            ('れ', 'レ', 're'),
            ('ろ', 'ロ', 'ro'),

            ('わ', 'ワ', 'wa'),
            ('を', 'ヲ', 'wo')
        
            ]


# function -> random_test_HtR_single(): Request users to enter the romaji of a hirakana. Return 0 for correct and the wrong_tuple when wrong.
# wrong_tuple: (hirakana, katakana, romaji, wrong_input)
def random_test_HtR_single():
    rint = random.randint(0, 44)
    result = input("请输入平假名 [{}] 对应的罗马字 >> ".format(kana_map[rint][0]))
    if result == kana_map[rint][2]: 
        print("＊正确  ({}, {}, {})".format(kana_map[rint][0], kana_map[rint][1], kana_map[rint][2]))
        return 0
    else:
        print("＊错误  ({}, {}, {})".format(kana_map[rint][0], kana_map[rint][1], kana_map[rint][2]))
        return (kana_map[rint][0], kana_map[rint][1], kana_map[rint][2], result)

# function -> random_test_KtR_single(): Request users to enter the romaji of a katakana. Return 0 for correct and the wrong_tuple when wrong.
# wrong_tuple: (hirakana, katakana, romaji, wrong_input)
def random_test_KtR_single():
    rint = random.randint(0, 44)
    result = input("请输入片假名 [{}] 对应的罗马字 >> ".format(kana_map[rint][1]))
    if result == kana_map[rint][2]: 
        print("＊正确  ({}, {}, {})".format(kana_map[rint][0], kana_map[rint][1], kana_map[rint][2]))
        return 0
    else:
        print("＊错误  ({}, {}, {})".format(kana_map[rint][0], kana_map[rint][1], kana_map[rint][2]))
        return (kana_map[rint][0], kana_map[rint][1], kana_map[rint][2], result)

# function -> rec_wrong_to_file(target_tuple: tuple, filename: str): Record your wrong try into a file for futher study.
# target_tuple: (hirakana, katakana, romaji, wrong_input)
def rec_wrong_to_file(target_tuple: tuple, filename: str):
    with open(filename, 'ab') as f:
        f.write("ASK ({}, {}, {}) INPUT {} \n".format(target_tuple[0], target_tuple[1], target_tuple[2], target_tuple[3]).encode('utf-8'))


# function -> random_test_HtR(): Request users to enter the romajis of a hirakanas. Show rate of speed and correctness while recording wrong try into file.
def random_test_HtR():
    passed, failed = 0, 0
    total_time_cost = 0

    while True: 
        start_time = time.time()

        result = random_test_HtR_single()

        end_time = time.time()
        single_time_cost = end_time - start_time
        total_time_cost += single_time_cost

        if result == 0:
            passed += 1
        else:
            failed += 1
            rec_wrong_to_file(result, RECORD_FILENAME_HIRA)

        print("当前速度指数：" + str(1 / (total_time_cost / (passed + failed))))
        print("当前正确率：" + str((passed / (passed+failed)) * 100) + "%")
        print("")
    

# function -> random_test_KtR(): Request users to enter the romajis of a katakanas. Show rate of speed and correctness while recording wrong try into file.
def random_test_KtR():
    passed, failed = 0, 0
    total_time_cost = 0

    while True: 
        start_time = time.time()

        result = random_test_KtR_single()

        end_time = time.time()
        single_time_cost = end_time - start_time
        total_time_cost += single_time_cost

        if result == 0:
            passed += 1
        else:
            failed += 1
            rec_wrong_to_file(result, RECORD_FILENAME_KATA)
            
        print("当前速度指数：" + str(1 / (total_time_cost / (passed+failed))))
        print("当前正确率：" + str((passed / (passed + failed)) * 100) + "%")
        print("")

def random_test_mixed():
    passed, failed = 0, 0
    total_time_cost = 0

    while True: 
        start_time = time.time()
        if random.randint(0,1) == 0:
            result = random_test_KtR_single()
        else:
            result = random_test_HtR_single()

        end_time = time.time()
        single_time_cost = end_time - start_time
        total_time_cost += single_time_cost

        if result == 0:
            passed += 1
        else:
            failed += 1
            rec_wrong_to_file(result, RECORD_FILENAME_MIXED)
            
        print("当前速度指数：" + str(1 / (total_time_cost / (passed+failed))))
        print("当前正确率：" + str((passed / (passed + failed)) * 100) + "%")
        print("")


# random_test_HtR()
random_test_mixed()
