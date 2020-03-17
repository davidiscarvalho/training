import pyrebase
from config import init_db

config = init_db

firebase = pyrebase.initialize_app(config)

# authentication
"""
auth = firebase.auth()

email = input("Please enter your email: ")
password = input("Please enter your password: ")

#user = auth.create_user_with_email_and_password(email, password)
#print("Ussr created successfully")

#signin = auth.sign_in_with_email_and_password(email, password)
#print("Sign in successfully")

#auth.send_email_verification(signin['idToken'])
#print("Email verification has been sent")

auth.send_password_reset_email(email)
print("We hav sent an email, check your inbox")
"""


# realtime database
"""
db = firebase.database()

data = {"name": "Bill Doe"}

# db.child("users").push(data)
#print("Data added to realtime db")

# db.child("users").child("OwnKey").set(data)
#print("Data added to realtime db")

#db.child("users").child("OwnKey").update({"name": "John Doe"})
#print("Data updated")

#users = db.child("users").get()
# print(users.val())

all_users = db.child("users").get()

for users in all_users.each():
    print(users.val())
    print(users.key())


db.child("users").child("M2ZnwXUotntENWoZc33").remove()
print("User removed")
"""

# storage
storage = firebase.storage()

# storage.child("images/newimage.jpg").put("dance-class.jpg")
#print("image uploaded")

storage.child("image/newimage.jpg").download(
    "C:\\training\\practice\\python\\training\\with_firebase\\", "downloaded.jpg")
print("image downloaded")
