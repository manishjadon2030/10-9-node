const express= require('express')
const app = express()
const Port = 5000
const user = require('./routes/user')

app.use(user);








app.listen(Port,(err)=>{
    if(err){
        console.log(err)
    } else{
        console.log("server is running at " ,Port)
    }
})






