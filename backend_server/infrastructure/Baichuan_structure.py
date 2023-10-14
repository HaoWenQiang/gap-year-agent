import requests
import json
import time
import hashlib



def Baichuan(prompt):

    # https://api.baichuan-ai.com/v1/stream/chat
    # https://api.baichuan-ai.com/v1/chat
    url = "https://api.baichuan-ai.com/v1/chat"
    api_key = "c26b4f15f15d5b159104e8ef16f6c97c"
    secret_key = "xq3SnYt64Dqtjrh/Nkb81D6jBp0="


    def calculate_md5(input_string):
        md5 = hashlib.md5()
        md5.update(input_string.encode('utf-8'))
        encrypted = md5.hexdigest()
        return encrypted

    data = {
        "model": "Baichuan2-53B",
        "messages": [
            {
                "role": "user",
                "content": prompt
            }
        ],
        "parameters": {
            "temperature": 0.3,
            "top_k": 10
        }
    }

    json_data = json.dumps(data)
    time_stamp = int(time.time())
    signature = calculate_md5(secret_key + json_data + str(time_stamp))

    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + api_key,
        "X-BC-Request-Id": "your requestId",
        "X-BC-Timestamp": str(time_stamp),
        "X-BC-Signature": signature,
        "X-BC-Sign-Algo": "MD5",
    }

    response = requests.post(url, data=json_data, headers=headers)

    if response.status_code == 200:
        # print("请求成功！")
        # print("响应header:", response.headers)
        # print("响应body:", response.text)
        print("响应body:", json.loads(response.text)['data']['messages'][0]['content'])
    else:
        print("请求失败，状态码:", response.status_code)

    return response["choices"][0]["message"]["content"]


# if __name__ == "__main__":
#
#     print(Baichuan('世界上人口最多的国家'))

