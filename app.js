const express = require("express");
const app = express();
let {PythonShell} = require('python-shell')


app.get("/", (req, res) =>{

  let options = {
    pythonOptions: ['-u'], // get print results in real-time
  };
   
  PythonShell.run('listener.py', options, (err, results) => {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    res.send(results)
  });



})

app.listen(4040, ()=>{
    console.log("lsitening")
})
