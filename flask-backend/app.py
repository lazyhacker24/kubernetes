from flask import Flask, jsonify
import datetime

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({
        "backend": "Flask Backend",
        "status": "Running Successfully",
        "time": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    })

@app.route('/api/data')
def api_data():
    return jsonify({
        "message": "Hello from Flask Backend!",
        "source": "Flask API",
        "timestamp": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
