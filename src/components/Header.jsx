import React from 'react'
import FlagEs from '../assets/flags/es.png'
import FlagPt from '../assets/flags/pt.png'


function Header() {
// const Header = ({ lang, setLang }) => {
//   const cambiarIdioma = (idioma) => {
//     setLang(idioma);
//   };

  
    return (
    <nav class="navegacao">
        <ul class="menu">
            <li className="idiomas">        
                <img src={FlagEs} alt="Español" onClick={() => ('es')} />
                <img src={FlagPt} alt="Portugués" onClick={() => ('pt')} />                
            </li>   
            <li>
                <a href="#inicio" class="menu-link">Inicio</a>
            </li>
            <li>
                <a href="#sobre" class="menu-link">Sobre</a>
            </li>
            <li>
                <a href="#proyectos" class="menu-link">Proyectos</a>
            </li>
            <li>
                <a href="#contacto" class="menu-link">Contacto</a>
            </li>
     

        </ul>
    </nav>
  )
}

export default Header