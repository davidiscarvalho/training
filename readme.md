**Title - Training Wheels**


**Description**

In this repo I will train my coding skills by testing and follow some tutorials

In this readme file I will keep some notes 


**Setup**

#clone git repo
git clone https://github.com/ABCDEF/ghijkl.git
cd ./ghijkl
#create python virtual environment
python -m venv .venv
#activate python virtual environment
.venv/Scripts/activate
#in the case it doesn't work :Set-ExecutionPolicy Unrestricted -Force
install gunicorn
#generate a requirements.txt
pip freeze > requirements.txt
#install requirements
pip install -r requirements.txt


**git**
git push origin master

git rm -r one-of-the-directories
git commit . -m "Remove directory"
git push origin master

**heroku**
heroku create appName
heroku addons:create heroku-postgresql:hobby-dev --app appName
heroku config --app appName  #add '?sslmode=require' to the DATABASE URL @script

**notes**
to convert ipynb
ipython nbconvert 'scrip.ipynb'

#generate a requirements.txt
pip freeze > requirements.txt

python -m pip install --upgrade pi
**build app**
requirements.txt
Procfile
runtime.txt (https://devcenter.heroku.com/articles/python-runtimes#supported-python-runtimes)
.gitignore
