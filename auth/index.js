let express=     require('express')
let app=    express()
app.use(express.json())
let cors= require('cors')
app.use(cors())
let bcrypt=  require('bcrypt')
let jwt=   require('jsonwebtoken')
 let mongoose=  require('mongoose');
const User = require('./model/user');
 mongoose.connect('mongodb://127.0.0.1:27017/databasename').
 then(()=>{
    console.log('db....');
 }).catch((err)=>{
    console.log(err);
    
 })
app.get('/',(req,res)=>{
    res.send('heheheheeh')
})

app.post('/create', async(req,res)=>{
    let user=req.body
    console.log(user,"helllo");
    let   data=   await  User.findOne({email:user.email})
    // console.log(data,"hehehe");
    if(data){
        res.send('user jinda haii')
    }
    else{
       let updatedPass=    await  bcrypt.hash(user.passWord,10)
    //  let dbUser=   new User(req.body)
    console.log(updatedPass,"hejhejej");
     let dbUser=  new User({
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        passWord:updatedPass
    })
       await  dbUser.save()
       res.send('createddddddd')
    }
    



})


app.post('/login', async(req,res)=>{
    let loginData=req.body
     let data=    await User.findOne({email:loginData.email})
     if(data){
                 let validPass=     await bcrypt.compare(loginData.passWord,data.passWord)
                 if(validPass){

                       let token=   jwt.sign(data.email,'jdsbfiuwhfiuwhfwuif')
                       console.log(token,"heheh");
                       
                    res.send('loginnnn')
                 }
                 else{
                    res.send('InvalidPssssss')
                 }
     }
     else{
        res.send('pahle account create kroooo')
     }


}
)

app.listen(2000,()=>{
    console.log('server running on port no 2000');
    

})