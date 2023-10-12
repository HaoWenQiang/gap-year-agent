# -*- coding:utf-8 -*-
"""

"""

import os
from flask import Flask, render_template, request, jsonify
import json
import logging

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


@app.route('/action', methods=['POST'])
def home():
    run_env = os.environ.get("FLASK_ENV")
    app.logger.info(f"run_env: {run_env}")
    if run_env == "deploy":
        return render_template('index_deploy.html')
    return render_template('index.html')


@app.route('/upload_file_test', methods=['POST'])
def upload_file_test():
    file = request.files['file']
    filename = file.filename
    app.logger.info("收到文件:" + filename)
    save_path = os.path.join('uploads', filename)
    result = ResponseResult(200, save_path, "success")
    return json.dumps(result.__dict__(), ensure_ascii=False)


@app.route('/chat', methods=['POST'])
def converse():
    request_test = request.form.get("text")
    try:
        # my service
        result = ResponseResult(200, "test", "success")
        return json.dumps(result.__dict__(), ensure_ascii=False)
    except Exception as e:
        app.logger.error(e)
        result = ResponseResult(200, str(e), "success")
        return json.dumps(result.__dict__(), ensure_ascii=False)


@app.route('/test', methods=['GET'])
def test():
    return "hello world, app is running  "


if __name__ == '__main__':
    app.debug = True
    handler = logging.FileHandler('logs/flask.log')
    app.logger.addHandler(handler)
    app.run(host='0.0.0.0', port=8000, threaded=True
            , debug=True
            )
