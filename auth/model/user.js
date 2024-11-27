const mongoose = require("mongoose");
let userSchema=   mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    passWord:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
       
    }

})

 let User=  mongoose.model('user',userSchema)
 module.exports=User



//  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pa2hpbDQxMEBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTczMjYyMzMzMSwiZXhwIjoxNzMyNjI2OTMxfQ.Tg2HuX9xrQ5ygkRNKSBGcjDy2D737-S41MOIhjne-yY






