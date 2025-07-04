from flask import Flask, render_template, request, jsonify, Response
import threading, time

app = Flask(__name__)
commands = {}
streams = {}

@app.route('/')
def index():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)