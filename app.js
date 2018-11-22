const express = require("express");
const app = express();
const os = require('os');
const ipAddress = os.networkInterfaces().en0[0].address;
console.log(ipAddress)

let {PythonShell} = require('python-shell')


// app.get("/", (req, res) =>{

//   let options = {
//     pythonOptions: ['-u'], // get print results in real-time
//   };
   
//   PythonShell.run('listener.py', options, (err, results) => {
//     if (err) throw err;
//     // results is an array consisting of messages collected during execution
//     res.send(results)
//   });
// })




app.get("/ping", (req, res) =>{
 
  res.send("pong");
})

app.listen(3000, ipAddress, ()=>{
    console.log("lsitening")
})
