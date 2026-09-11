import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pokedex from './pokedex.jsx'
import './pokedex.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pokedex/>
  </StrictMode>,
)
