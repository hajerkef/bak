const express = require("express")
const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

  
app.get("/home",(req,res)=>{
res.send("open from nine tofive")
})

app.listen(4000,()=>{console.log("server is run")})
console.log("server ")
