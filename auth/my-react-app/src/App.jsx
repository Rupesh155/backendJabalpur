import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Admin from './Admin'

const App = () => {
  return (
    <div>
      <Routes>
        <Route   path='/'  element={<Signup/>}/>
        <Route   path='/login'  element={<Login/>}/>
        <Route   path='/admin'  element={<Admin/>}/>


      </Routes>
    </div>
  )
}

export default App