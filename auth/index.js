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
   //  123 
    else{
       let updatedPass=    await  bcrypt.hash(user.passWord,10)
    //  let dbUser=   new User(req.body)
    console.log(updatedPass,"hejhejej");
     let dbUser=  new User({
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        role:user.role||'user',
        passWord:updatedPass
    })
       await  dbUser.save()
       res.send('createddddddd')
    }
    



})


app.post('/login', async(req,res)=>{
    let loginData=req.body
     let data=    await User.findOne({email:loginData.email})
     console.log(data,"datata");
     
     if(data){
                 let validPass=     await bcrypt.compare(loginData.passWord,data.passWord)
                 if(validPass){
                       let token=   jwt.sign({email:data.email,role:data.role},'jdsbfiuwhfiuwhfwuif',{expiresIn:'1h'})
                       console.log(token);
                       
                   return res.status(200).send(token)
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

function checkRole(role){
   return (req,res,next)=>{
      console.log(req,"heheheh");
      
        let token=      req.headers.authorization
        console.log(token,"kyaa mil rhaa kyaaaa");
        if(!token){
         return res.send('unauthorizedddddd')
        }
        else{
          let decodedToken=    jwt.verify(token,'jdsbfiuwhfiuwhfwuif') 
          if(decodedToken.role!==role){
            return res.send('accessss denieddddddddd')
          }
          else{
            next()
          }
        }


   }

}

app.get('/admin',checkRole('admin'),(req,res)=>{
   res.send('yess tum access kr sakte ho')

})
app.get('/user',checkRole('user'),(req,res)=>{
   res.send('user hu mai heheheh')

})

app.listen(2000,()=>{
    console.log('server running on port no 2000');
    

})