import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slider_Bar from './components/slide_bar/slide_bar'
import Response_Bar from './components/reponse_bar/response'
import Response_Bar2 from './components/reponse_bar/response2'
import Interface from './components/interface/interface'
import GeminiAI from './components/interface/interface'
import LoginCard from './components/auth/login'
import StaticExample from './components/auth/login'
import Example from './components/auth/login'
import LoginModal from './components/auth/login'
import Sign from './components/interface/interface'


function App() {
  return (
    <div className='app-container'>
      <Slider_Bar />
      <Response_Bar />
      {/* <Interface /> */}
      {/* <Sign /> */}
     
    </div>
  )
}

export default App

