import React, { useState } from "react";
import FlagEs from '../assets/flags/es.png'
import FlagPt from '../assets/flags/pt.png'
import { getTranslation } from '../languages'

const MobileDropdownMenu = ({ lang, setLang }) => {
  const t = getTranslation(lang);
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(prev => !prev);
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="mobile-nav">
        
        <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={toggle}
        >
            {/* Iconos: hamburguesa / X (SVG simples) */}
            {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
                <path d="M18 6 L6 18 M6 6 L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            )}
        </button>

        <ul
            id="mobile-menu"
            className={`mobile-menu ${open ? "open" : ""}`}
            role="menu"
            aria-hidden={!open}
        >
            <li role="menuitem">
            <a  class="menu-link" href="#inicio" onClick={handleLinkClick}>{t.header.inicio}</a>
            </li>
            <li role="menuitem">
            <a class="menu-link" href="#sobre" onClick={handleLinkClick}>{t.header.sobre}</a>
            </li>
            <li role="menuitem">
            <a class="menu-link" href="#proyectos" onClick={handleLinkClick}>{t.header.proyectos}</a>
            </li>
            <li role="menuitem">
            <a  class="menu-link" href="#contacto" onClick={handleLinkClick}>{t.header.contacto}</a>
            </li>
        </ul>

        <ul className="idiomas-mobile">
            <img src={FlagEs} alt="Español" onClick={() => setLang("es")} />
            <img src={FlagPt} alt="Portugués" onClick={() => setLang("pt")} />
        </ul> 
    </nav>
  );
}

export default MobileDropdownMenu;
