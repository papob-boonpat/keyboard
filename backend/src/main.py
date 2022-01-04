from flask import Flask, request

app =Flask(__name__)

@app.route("/hello", methods=['GET'])
def hello():
  return "20"

if __name__ == "__main__":
  app.run(debug=True, port=5000)