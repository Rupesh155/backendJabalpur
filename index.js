// console.log('hello');

//   let fs=   require('fs')

//   fs.writeFile('index.html','hello',(err)=>{
//     if(err) throw err
//     console.log('sab kuch theek hai');
//   })

//   fs.readFile('index.html',(err,data)=>{
//     if(err) throw err
//     console.log(data.toString());
    

//   })



       




//   fs.writeFileSync('index.html','hello hiii')
// // let data=  fs.readFileSync('index.html')
// // console.log(data.toString());
// // fs.unlinkSync('index.html')
// fs.appendFileSync('index.html' ,'hiii mai  hu kaun')


//   console.log(fs);

// npm      vs       npx 


// let joke=  require('give-me-a-joke')
// joke.getRandomDadJoke((data)=>{
//     console.log(data,'hrh');
// })   


//     let http=      require('http')
//     // console.log(http,"heheh");
//   let server=    http.createServer( (req,res)=>{
//     console.log(req,'mujhe dekhoo');
//       if(req.url=='/'){
//         res.end('hellooo mai hu server aur aap...??')

//       }
//       else if(req.url=='/about'){
//     res.end('aboutssssssss')
        
//       }
//       else{
//         res.end('laapta routesssss')
//       }


//     })

//     server.listen(8000, ()=>{
//         console.log('Server running on port no 8k');
        
//     })

// console.log([]==[]);
// const array1 = [];
// const array2 = [];
// console.log(JSON.stringify(array1) === JSON.stringify(array2)); // true


// Here, JSON.stringify() converts arrays to strings. Since JSON.stringify([]) is "[]" for both arrays, this comparison returns true.

// Summary
// [] == [] is false because each [] is a new array with a unique reference.
// JavaScript compares objects (and arrays) by reference, not by content.
// To compare arrays by content, use a method like JSON.stringify() or a loop to compare individual elements.


// const arr1 = [1, 2];
// const arr2 = arr1;
// console.log(arr1 === arr2);
// const arr1 = [1, 2];
// const arr2 = arr1;
// console.log(arr1 === arr2);

// console.log([1, 2, 3] == [1, 2, 3]);

// console.log(a === b);
// console.log(JSON.stringify(a) === JSON.stringify(b));
// console.log(NaN == NaN);
// console.log(NaN === NaN);
// const obj1 = { name: "Alice" };
// const obj2 = obj1;
// obj2.name = "Bob";
// 'use strict';
// aa=5
// console.log(aa);

// console.log([1, 2] + [3, 4]);
// hoistedFunction();
// var hoistedFunction = function() {
//     console.log("Not Hoisted!");
// }


// function sum(){
//     var a=5
//     console.log('hello');
    
// }
// console.log(a);
// sum()
// function sum(){
//     let  a=5
//     console.log('hello');
    
// }
// console.log(a);
// sum()


// {
//     var a=5
//     console.log(a);
    
// }
// console.log(a);




// function sum(a=50,b=40){
//     console.log(a+b);
    

// }
// sum(a=null,b=null)
// function sum(a=50,b=40){
//     console.log(a+b);
    

// }
// sum(a=undefined,b=null)

// sum(a=null,b=null)
// function sum(a=50,b=40){
//     console.log(a+b);
    

// }
// sum(a=undefined,b=undefined)





// let express=  require('express') 
// let app=   express()
// app.use(express.json())


// app.use((req,res,next)=>{
//     // console.log();
//     // res.send('mai jane nhi dungaa')
//     next()
    
// })s);
    
// app.use((req,res,)=>{
//     // console.log();
//     // res.send('mujhse bhi t0 puch lo ')
    
    
// })

// app.get('/',(req,res)=>{
//     res.send('helloooooooo')

// })
// app.get('/cat',(req,res)=>{
//     res.send('cat')

// })
// app.get('/dog',(req,res)=>{
//     res.send('dog')

// })
// locahost:4000/r/1

// app.get('/r/:data',(req,res)=>{
//     let arr=[1,2,3,4,45,5,6,7,6,565,4,3,2,12,2]
//     let {data}=req.params
//     let filterData=  arr.filter((a)=>{
//         return a==data

//       })
//        let name=  filterData.map(()=>{
//         return 'done'

//       })

//     console.log(req.param)


//     res.send(name)
    
// })

// get  ,post , patch, put delet


// app.set('view engine' ,'ejs')
// app.use(express.static('public'))
// let arr=[1,2,3,4,5,67,7,8,6]
//    app.get('/',(req,res)=>{
// //   let data=    Math.random()
//     res.render('index',{arr})
//    })    

//    app.get('/new',(req,res)=>{
//     res.render('new')
//    })
// app.get('/search',(req,res)=>{
//     console.log(req.query);
//     let {firstname,lastaname}=req.query   
//     http://localhost:4000/search?firstname=rahul&&lastaname=hehehe
//     res.send(`${firstname} ${lastaname}`)
// })


// app.get('/',(req,res)=>{

    
//     res.render('index')

// })

// app.get('/user',(req,res)=>{
//     console.log(req.query,"hehe");
//     let {user,pass}=req.query
//     res.send(`${user} ${pass}`)
// })
// app.post('/user',(req,res)=>{
//     console.log(req.body);
    
//     res.send('<h1> helllp</h1>')
// })

// app.listen(4000,()=>{
//     console.log('server running on port no 4000');
    
// })

// // localhost:4000/search?fn=rahul&&ln=jain

 let express=    require('express')
 let app=  express()
 //index.js
let methodOverride = require('method-override');
let mongoose=     require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/databasename').then(()=>{
    console.log('db');                            
}).catch((err)=>{
    console.log(err);
})
app.use(methodOverride('_method'));
 app.use(express.static('public'))
 app.use(express.urlencoded({extended:false}))
 app.set('view engine','ejs')

 let comments = [
    {
        id:0,
        username:"Sam",
        comment:"chitkara is a nice university 0"
    },
    {
        id:1,
        username:"g2",
        comment:"chitkara is a nice university 1"
    },
    {
        id:2,
        username:"vohra",
        comment:"chitkara is a nice university 2"
    }
]
  let userSchema=    mongoose.Schema({
    username:{
        type:String

    },
    lastName:{
        type:String
    },
    age:{
        type:Number

    }
   })
   let User=   mongoose.model('user',userSchema)
    let dbUser=   new User({username:"sanaya",lastName:"kohli",age:32})
    dbUser.save()



app.get('/',(req,res)=>{
    res.send('mai hu don')
})
 app.get('/comment',(req,res)=>{
    res.render('index',{comments})

 })
 app.get('/commnet/new/:id',(req,res)=>{

     let {id}=req.params
     console.log(id,"");
     
   let data=     comments.find((a)=>{
            return a.id==id

        })
        console.log(data);
        
     
    res.render('new',{data})

 })
 app.get('/comment/form',(req,res)=>{

    res.render('form')
 })
 app.post('/comment',(req,res)=>{
    let {username,comment}=req.body

    comments.push({username,comment,id:comments.length})
    
    res.redirect('/comment')

 })
 app.get('/comment/edit/:id',(req,res)=>{
    let {id}=req.params
    let editData=     comments.find((a)=>{
        return a.id==id

    })
    console.log(editData);

    res.render('edit',{editData})

 })
 app.patch('/comment/edit/:id',(req,res)=>{
    let {id}=req.params
     let oldData= comments.find((a)=>{
        return a.id==id
      })

    let {username,comment}=req.body
    oldData.username=username
    oldData.comment=comment
  
    res.redirect('/comment')
    
 })
app.get('/comment/delet/:id',(req,res)=>{
    let {id}=req.params
    let newData=    comments.filter((a)=>{
        return a.id!=id
      })
      comments=newData
      res.redirect('/comment')

})
 app.listen(2000,()=>{
    console.log('server chal gyaa.... hehehe');
    
 })


































    

  























