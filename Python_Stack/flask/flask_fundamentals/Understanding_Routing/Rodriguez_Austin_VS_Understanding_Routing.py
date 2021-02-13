from flask import Flask
app=Flask(__name__)


@app.route('/')   # base route http://localhost:5000
def hello_world():
    return 'Hello World'


@app.route('/say_hello') #http://localhost:5000/say_hello
def say_hello():
    return "hello friend... welcome and thanks for stopping by"

@app.route('/dojo')
def say_dojo():
    return "Dojo!"

@app.route('/say_hello/<name>')
def personal_hello(name):
    return f'Hello {name}.... thanks for stopping by'

@app.route('/say_hello/<name>/<grade>')
def hello_plus(name,grade):
    return f'Hello {name}, your new grade is an {grade}'

@app.route('/say/repeat/<num>/<anything>')
def repeat(num,anything):
    return (int(num)*anything)


if __name__=='__main__':
    app.run(debug=True)