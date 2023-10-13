# -*- coding:utf-8 -*-


import json
import os

"""
    存储方式：文件存储
    save the setting json to storage ,  save the prompt txt to storage
    e.g:  storage/persona/zhangsan.json  storage/persona/zhangsan_prompt.txt

"""

# person_data = {
#     "name": "$NAME",
#     "age": "$AGE",
#     "male": "$MALE",
#     "hobby": "$HOBBY",
#     "personality": "$PERSONALITY"
# }

def insert_person_data(person_profile):
    person_name = person_profile["name"]
    file_path = f"../storage/{person_name}.json"
    with open(file_path, 'w') as json_file:
        json.dump(person_profile, json_file)


def update_person_data(person_name, person_new_dict):
    old_person_json = get_file_by_name(person_name)
    if old_person_json:
        for person_new in person_new_dict:
            for change_key in person_new:
                old_person_json[change_key] = person_new[change_key]
        insert_person_data(old_person_json)
    return None


def get_person_data(person_name):
    return get_file_by_name(person_name)


def get_file_by_name(file_name):
    file_path = f"../storage/{file_name}.json"
    if os.path.exists(file_path):
        with open(file_path, 'r') as json_file:
            return json.load(json_file)
    return None
