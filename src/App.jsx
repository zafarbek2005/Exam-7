import React from 'react'
import Navbar from './Components/Header/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import { Route,Routes } from 'react-router-dom'
import Not__found from './Components/Not__found/Not__found'
import Single from './Components/Single/Single'
const App = () => {
  return (
    <>
    <Navbar/>
  


    
    <Routes>
            <Route path="/" element={  <Home/>} />
            <Route path="/products/:id" element={<Single/>} />

            <Route path="*" element={<Not__found/>} />
            <Route path="/register" element={""} />
            <Route path="/" element={""}>
              <Route path="admin" element={""} />
            </Route>
          </Routes>




    <Footer/>
    
    
    
    
    
    
    
    
    </>
  )
}

export default App