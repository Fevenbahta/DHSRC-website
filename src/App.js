import React from 'react'
import { Footer, Header, Possiblity, WhatGPT3,Blog, Features  } from './container';
import { Cta, Brand, Navbar} from './components';
import './App.css'

const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
<Navbar/>
<Header/>
      </div>
   <Brand/>
   <WhatGPT3/>
   <Features/>
   <Possiblity/>
   <Cta/>
   <Blog/>
   <Footer/>
    </div>
  )
}

export default App


