import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../HomePage/Home'
import Footer from '../Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Subscription from '../Subscription/Subscription';
import Cars from '../Cars/Cars';
import About from '../About/About';
const Pages = () => {
  return (
    <div>
        <Router>
        <Navbar/>
            <Routes>
                <Route path='/' element={ <Home/>}/>
                <Route path='/subscription' element={ <Subscription/>}/>
                <Route path='/cars' element={ <Cars/>}/>
                <Route path='/about' element={ <About/>}/>
            </Routes>
        </Router>
     

        <Footer/>
    </div>
  )
}

export default Pages