# -*- coding:utf-8 -*-

from enum import Enum


class PersonProfile:

    def __init__(self, name, age, male, hobby, personality):
        self.name = name
        self.age = age
        self.male = male
        self.hobby = hobby
        self.personality = personality


class PersonaState(Enum):
    # 空闲
    IDLE = 0
    # 聊天
    CONVERSATION = 1
    # 寻路
    ROUTE = 2
    # 抵达
    ARRIVED = 3
    # 场景默认活动，咖啡店：默认喝咖啡
    SCENE_ACTIVE = 4


class Persona:

    def __init__(self, ):
        self.state = PersonaState.IDLE
        self.daily_plan = None
        self.person_profile = None

    def action_next(self):
        pass

    def conversation_able(self, enviroment):
        pass

    def save_state(self):
        pass

    def get_state(self):
        pass

    def refresh_state(self):
        pass
