const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

let users = []

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/register",(req,res)=>{
  console.log("requested", req.body)
  users.push({username:req.body.username, password:req.body.password})
  res.send(true)
})

app.post("/login",(req,res)=>{
console.log(req.body)

const found = users.find((u)=>
    u.username === req.body.username && u.password === req.body.password
  )

  if(found){
    res.send(true)
  }
  else{
    res.send(false)
  }
})

app.listen(3000,()=>{
    console.log("Server Started..")
})