import time
from flask import Flask, request
from multiprocessing import Process
from AppKit import NSWorkspace
app =Flask(__name__)

@app.route("/hello", methods=['GET'])
def hello():
  return "20"

def mainLoop():
  # while True:
  #   activeAppName = NSWorkspace.sharedWorkspace().activeApplication()['NSApplicationPath']
  #   print (activeAppName)
  #   time.sleep(5)

    
if __name__ == "__main__":
  p = Process(target=mainLoop)
  p.start()
  app.run(debug=True, port=5000)
  p.join()