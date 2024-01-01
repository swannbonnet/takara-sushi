import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Dishes from './components/dishes/Dishes'
import About from './components/about/About'
import Reviews from './components/reviews/Reviews'
import Footer from './components/footer/Footer'


export default function App() {
  return (
    <div>
      <Navbar/>
      <main>
        <div id='home'>
          <Home/>
        </div>
        <div id='dishes'>
          <Dishes/>
        </div>
        <div id='about'>
          <About/>
        </div>
        
        <div id="reviews">
          <Reviews/>
        </div>
        <div>
          <Footer/>
        </div>
      </main>
    </div>
  )
}
