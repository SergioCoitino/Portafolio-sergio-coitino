import React from 'react'

function Header() {
  return (
    <nav class="navegacao">
        <ul class="menu">
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