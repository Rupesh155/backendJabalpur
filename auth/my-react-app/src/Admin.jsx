import axios from 'axios'
import React from 'react'

const Admin = () => {
     async  function fun1(){
        let token=   localStorage.getItem('token')
        console.log(token,"helloo");
        
      let res=   await  axios.get('http://localhost:2000/user',{headers:{
            Authorization:`${token}`
        }}) 
        console.log(res,"kya aayega");
        

    }

  return (
    <div>
        <h1> 

            <button onClick={fun1}>GetAdminA</button>
            <button>User</button>

        </h1>
    </div>
  )
}

export default Admin