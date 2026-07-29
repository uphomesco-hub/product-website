import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const mountApp = async () => {
  if (document.fonts) {
    await document.fonts.load('16px "Proxima Nova"')
    await document.fonts.ready
  }

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

mountApp()
