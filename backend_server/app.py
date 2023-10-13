# -*- coding:utf-8 -*-
"""

"""

import os
from flask import Flask, render_template, request, jsonify
import json
import logging
from service.person.person_factory import *

app = Flask(__name__)


class ResponseResult():

    def __init__(self, code, data, msg):
        self.code = code
        self.data = data
        self.msg = msg

    def __dict__(self):
        return {
            'code': self.code,
            'msg': self.msg,
            'data': self.data
        }


@app.route('/upload_file_test', methods=['POST'])
def upload_file_test():
    file = request.files['file']
    filename = file.filename
    app.logger.info("收到文件:" + filename)
    save_path = os.path.join('uploads', filename)
    result = ResponseResult(200, save_path, "success")
    return json.dumps(result.__dict__(), ensure_ascii=False)


@app.route('/test', methods=['GET'])
def test():
    return "hello world, app is running  "


################################ persona_settings  ###############################

@app.route('/persona/create', methods=['POST'])
def persona_create():
    request_json = request.get_json()
    persona_name = request_json['name']
    #  参数待修改,person
    persona_profile = request_json["personality"]
    personality = request_json["personality"]
    persona_hobby = request_json["hobby"]

    person = create_person(persona_name, 18, 0, persona_hobby, personality)

    result = ResponseResult(200, person, "success")

    return json.dumps(result.__dict__(), ensure_ascii=False)


@app.route('/persona/update', methods=['POST'])
def persona_update():
    request_json = request.get_json()
    persona_name = request_json['name']
    update_key = request_json["update_key"]
    update_value = request_json["update_value"]
    update_person_profile(persona_name, update_key, update_value)
    result = ResponseResult(200, "", "success")
    return json.dumps(result.__dict__(), ensure_ascii=False)


@app.route('/persona/setting/get', methods=['GET'])
def persona_get():
    request_json = request.get_json()
    persona_name = request_json['name']
    person = get_person_profile(persona_name)
    result = ResponseResult(200, person, "success")
    return json.dumps(result.__dict__(), ensure_ascii=False)


# ############################### persona_actions  ###############################


@app.route('/persona/action/next', methods=['POST'])
def action_next():
    """
        desc:    获取下一步计划和行动
        :param request: person_name
        :return: (action_enum,action_value_list) . (route,[(x0,y0),(x1,y1),...])
    """
    request_json = request.get_json()
    persona_name = request_json['name']
    persona_loc = request_json['location']  # (x,y)


    result = ResponseResult(200, "save_path", "success")
    return json.dumps(result.__dict__(), ensure_ascii=False)


@app.route('/persona/action/chat-able', methods=['POST'])
def persona_conversation_able():
    """
       person chat
    """
    persona_name = request.form.get("name")
    persona_profile = request.form.get("personality")
    persona_hobby = request.form.get("hobby")
    result = ResponseResult(200, "save_path", "success")
    return json.dumps(result.__dict__(), ensure_ascii=False)


# ############################### player_interaction  ###############################


@app.route('/player/ineraction/check', methods=['POST'])
def ineraction_check():
    """
        desc:    person move from A to B
        :param request: person_name
        :return: [(x0,y0),(x1,y1),...]
    """
    request_json = request.get_json()
    persona_name = request_json['name']
    result = ResponseResult(200, "save_path", "success")
    return json.dumps(result.__dict__(), ensure_ascii=False)


if __name__ == '__main__':
    app.debug = True
    handler = logging.FileHandler('logs/flask.log')
    app.logger.addHandler(handler)
    app.run(host='0.0.0.0'
            , port=8000
            , threaded=True
            , debug=True
            )
