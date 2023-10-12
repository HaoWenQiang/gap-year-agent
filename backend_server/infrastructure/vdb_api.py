# -*- coding:utf-8 -*-
import requests

import tcvectordb
from tcvectordb.model.enum import FieldType, IndexType, MetricType, ReadConsistency

db_endpoint = '43.140.253.125:10010'
api_key = 'IQGGEYuL6FwzI3DBahk93MZugbxDSQZBvYG4velI'

client = tcvectordb.VectorDBClient(url=f'http://{db_endpoint}', username='root', key=api_key,
                                   read_consistency=ReadConsistency.EVENTUAL_CONSISTENCY, timeout=30)


def http_test_create_db():
    # no use
    url = f"http://{db_endpoint}/database/create"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer account=root&api_key={api_key}"
    }
    data = {
        "database": "db-test-one"
    }

    response = requests.post(url, headers=headers, json=data)
    print(response.status_code)
    print(response.text)


def ls_vdb():
    db_list = client.list_databases()
    for db in db_list:
        print(db.database_name)


def create_db(db_name):
    db = client.create_database(database_name=db_name)
    print(db.database_name)
