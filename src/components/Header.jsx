import React from 'react'
import FlagEs from '../assets/flags/es.png'
import FlagPt from '../assets/flags/pt.png'
import { getTranslation } from '../languages'



const Header = ({ lang, setLang }) => {
  const t = getTranslation(lang);
  
    return (
    <nav class="navegacao">
        <ul class="menu">
            <li className="idiomas">
                <img src={FlagEs} alt="Español" onClick={() => setLang("es")} />
                <img src={FlagPt} alt="Portugués" onClick={() => setLang("pt")} />
            </li>  

            <li><a href="#inicio" class="menu-link">{t.header.inicio}</a></li>

            <li><a href="#sobre" class="menu-link">{t.header.sobre}</a></li>

            <li><a href="#proyectos" class="menu-link">{t.header.proyectos}</a></li>

            <li><a href="#contacto" class="menu-link">{t.header.contacto}</a></li>
     
        </ul>
    </nav>
  )
}

export default Header