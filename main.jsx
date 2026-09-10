import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pokedex from './pokedex_css.jsx'
export default Pokedex;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pokedex/>
    <Pokedexcss/>
  </StrictMode>,
)
