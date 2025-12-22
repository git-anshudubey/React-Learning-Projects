import { useState } from 'react'
import './App.css'
import Header from './compoments/Header/Header'
import Footer from './compoments/Footer/Footer'
import Home from './compoments/Home/Home'

function App() {


  return (
    <>
      {/* <p className='bg-green-600 p-4 text-black'>Hello to React Router.</p> */}
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
