from flask import Flask

app = Flask(__name__)

@app.route('/<numero>', methods=['GET','POST'])
def index(numero):
    return f'<h1>Hello Y\'all!</h1> {numero}'

if __name__=='__main__':
    app.run(debug=True)