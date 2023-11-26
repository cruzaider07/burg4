from flask import Flask
from auth import auth
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy
dbname = 'database.db'

def create_app():
    app = Flask(__name__)

    app.register_blueprint(auth, url_prefix='/')

    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{dbname}'

    return app