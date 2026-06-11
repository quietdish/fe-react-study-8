import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import TempApp from './assets/TempApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <TempApp /> */}
  </StrictMode>,
)
