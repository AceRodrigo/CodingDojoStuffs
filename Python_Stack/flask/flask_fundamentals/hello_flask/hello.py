from flask import Flask                 #Import Flask to allow us to create our app
app = Flask(__name__)                   #Create a new instance of the Flask Class called "app"

@app.route('/')                          #The "@" decorator associates this route with the function imediately following
def hello():
    return 'Hello!!'               #Return the string 'Hello World!' as a response


@app.route('/success')
def success():
    return "success"

@app.route('/<name>')
def hello_person(name):
    print("in hello_person function")
    print(name)
    return f"hello {name}!"



if __name__=="__main__":                #Ensure this file is being run directly and not from a different module
    app.run(debug=True)                 #Run the app in debug mode.

#import statements, maybe some other routes
#app.run(debut=True) should be the very last statement!
