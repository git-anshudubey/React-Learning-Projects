import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import UserContext from './context/UserContext'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <>
    {/*
    <UserContext.Provider>
      
    </UserContext.Provider>

    Or we can also use that in other way like as */}

    <UserContextProvider>
      <h1>React is easy to learn.</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
    
    </>
  )
}

export default App
