init_db = {

    'apiKey': 'AIzaSyCnduJWRKMbYX-ffId0JXbQJyVEvrt9qTQ',
    'authDomain': 'test0316-35214.firebaseapp.com',
    'databaseURL': 'https://test0316-35214.firebaseio.com',
    'projectId': 'test0316-35214',
    'storageBucket': 'test0316-35214.appspot.com',
    'messagingSenderId': '357591708584',
    'appId': '1:357591708584:web:3c81611821a54fb8e2239d',
    'measurementId': 'G-QRDQMYRJP3'
}

# using config parser
"""
from configparser import ConfigParser

config = ConfigParser()

config['firebase'] = {

    'apiKey': 'AIzaSyCnduJWRKMbYX-ffId0JXbQJyVEvrt9qTQ',
    'authDomain': 'test0316-35214.firebaseapp.com',
    'databaseURL': 'https://test0316-35214.firebaseio.com',
    'projectId': 'test0316-35214',
    'storageBucket': 'test0316-35214.appspot.com',
    'messagingSenderId': '357591708584',
    'appId': '1:357591708584:web:3c81611821a54fb8e2239d',
    'measurementId': 'G-QRDQMYRJP3'
}

with open('./dev.ini', 'w') as f:
    config.write(f)

#paste on python script
from configparser import ConfigParser

parser = ConfigParser()
parser.read('dev.ini')

config = {

    'apiKey': parser.get('firebase', 'apiKey'),
    'authDomain': parser.get('firebase', 'authDomain'),
    'databaseURL': parser.get('firebase', 'databaseURL'),
    'projectId': parser.get('firebase', 'projectId'),
    'storageBucket': parser.get('firebase', 'storageBucket'),
    'messagingSenderId': parser.get('firebase', 'messagingSenderId'),
    'appId': parser.get('firebase', 'appId'),
    'measurementId': parser.get('firebase', 'measurementId')
}
"""
