import React from 'react'
import FlagEs from '../assets/flags/es.png'
import FlagPt from '../assets/flags/pt.png'

function Idiomas() {
  return (
            <li className="idiomas">        
                <img src={FlagEs} alt="Español" onClick={() => ('es')} />
                <img src={FlagPt} alt="Portugués" onClick={() => ('pt')} />                
            </li>
  )
}

export default Idiomas