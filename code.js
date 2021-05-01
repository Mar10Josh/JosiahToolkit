// Josiah Toolkit
 //Libaries
tb = require('trollbox-bot')


function ShutdownWithSuccess() {
    console.log("Success")
    proccess.exit[0]
}
function NewTestThing(type) {
 if (type == "tb-bot") {
  tb.connect("TestBot from JosiahToolkit","blue","$","HelloWorld")

  tb.onconnect = function(socket) {
      tb.setcommand("help",function(socket, data) {
        socket.send("=HelloWorld: Nice Little Hello World!")
      })
      tb.setcommand("helloworld",function(socket, data) {
        socket.send("Hello World!")
      })
  }
 }
}
