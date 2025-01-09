import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContextProvider from './components/context/contetx.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ContextProvider> {/* Correct usage of context provider */}
      <App />
    </ContextProvider>
  </StrictMode>,
)
