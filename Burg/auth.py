from flask import render_template, request, Blueprint

auth = Blueprint('auth', __name__)

@auth.route('/signup', method=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        fname = request.form['fname']
        lname = request.form['lname']
        p1 = request.form['p1']
        p2 = request.form['p2']