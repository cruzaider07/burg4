from flask_login import UserMixin
from . import db

class User(db, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(10))
    lname = db.Column(db.String(10))
    email = db.Column(db.String(10))
    pword = db.Column(db.String(10))
