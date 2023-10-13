# -*- coding:utf-8 -*-

from backend_server.infrastructure.file_storage import *
from persona import PersonProfile


def create_person(name, age, male, hobby, personality):
    person = PersonProfile(name, age, male, hobby, personality)
    insert_person_data(person)
    # insert_person_prompt_data(person)
    create_daily_plan(person)
    return person


def update_person_profile(person_name, update_key, update_value):
    new_dict = {update_key: update_value}
    update_person_data(person_name, new_dict)
    # update_person_prompt_data(person)


def get_person_profile(name):
    return get_person_data(name)


def create_daily_plan(person):
    #  TODO
    pass


def update_daily_plan(person):
    #  TODO
    pass