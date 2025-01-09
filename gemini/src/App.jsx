import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slider_Bar from './components/slide_bar/slide_bar'
import Response_Bar from './components/reponse_bar/response'


function App() {
  return (
    <div className='app-container'>
      <Slider_Bar />
      <Response_Bar />
    </div>
  )
}

export default App

