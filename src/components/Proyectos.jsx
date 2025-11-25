import React from 'react'
import Proyecto01 from '../assets/IMC.png'
import Proyecto02 from '../assets/LinkInBio.png'
import Proyecto03 from '../assets/Batman_FanPage.png'
import Proyecto04 from '../assets/Portfolio.png'
import Proyecto05 from '../assets/StarWarsGallery.png'
import Proyecto06 from '../assets/StarWarsCharacters.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

function Proyectos() {
  return (
    <section id="proyectos" className="projetos">
        <h2 className="seccion-titulo">Mis Proyectos</h2>
        <div className="projetos-caixa">

            <div className="projetos-card">
                <img src={Proyecto01} alt="Projeto1" className="projetos-imagem" />
                <div className="overlay">
                    <a href="https://calculadora-bmi-imc.netlify.app/" target='_blank' rel='noopener, noreferrer'>
                        <FontAwesomeIcon icon={faExternalLinkAlt} size='2x' className="external-icon" />
                    </a>
                </div>
                <div className="caixa-textos-projeto">
                    <h3 className="info-projetos">Calculadora IMC</h3>
                    <p className="paragrafo-projetos">Este proyecto es una aplicación web interactiva que permite 
                        a los usuarios calcular su IMC de manera rápida y sencilla. Cuenta con:
                        interfaz amigable y responsiva, cálculo de IMC basado en la fórmula estándar, diseño atractivo 
                        y minimalista y disponible en tres idiomas.</p>
                </div>
            </div>

            <div className="projetos-card">
                <img src={Proyecto02} alt="Projeto2" className="projetos-imagem" />
                <div className="overlay">
                    <a href="https://sergio-coitino.netlify.app/" target='_blank' rel='noopener, noreferrer'>
                        <FontAwesomeIcon icon={faExternalLinkAlt} size='2x' className="external-icon" />
                    </a>
                </div>
                <div className="caixa-textos-projeto">
                    <h3 className="info-projetos">Link In Bio</h3>
                    <p className="paragrafo-projetos">Este proyecto es un perfil profesional en línea que muestra la 
                        información de contacto y los enlaces a las redes sociales del usuario. El diseño es 
                        minimalista y fácil de navegar, lo que lo hace ideal para cualquier profesional que desee tener
                        una presencia en línea.</p>
                </div>
            </div>

            <div className="projetos-card">
                <img src={Proyecto03} alt="Projeto3" className="projetos-imagem" />
                <div className="overlay">
                    <a href="https://projeto-batman1.netlify.app/" target='_blank' rel='noopener, noreferrer'>
                        <FontAwesomeIcon icon={faExternalLinkAlt} size='2x' className="external-icon" />
                    </a>
                </div>
                <div className="caixa-textos-projeto">
                    <h3 className="info-projetos">Batman Page</h3>
                    <p className="paragrafo-projetos"> Esta página web es un tributo a la película de 
                        Batman dirigida por Christopher Nolan. Es una página que replica una web de 
                        informacion y personajes de esta pelicula. Disponibe solo en portugués</p>
                </div>
            </div>

            <div className="projetos-card">
                <img src={Proyecto04} alt="Projeto1" className="projetos-imagem" />
                <div className="overlay">
                    <a href="#inicio" target='_blank' rel='noopener, noreferrer'>
                        <FontAwesomeIcon icon={faExternalLinkAlt} size='2x' className="external-icon" />
                    </a>
                </div>
                <div className="caixa-textos-projeto">
                    <h3 className="info-projetos">Portfolio</h3>
                    <p className="paragrafo-projetos">Este proyecto es una aplicación web interactiva que permite 
                        a los usuarios calcular su IMC de manera rápida y sencilla. Cuenta con:
                        interfaz amigable y responsiva, cálculo de IMC basado en la fórmula estándar, diseño atractivo 
                        y minimalista y disponible en tres idiomas.</p>
                </div>
            </div>

            <div className="projetos-card">
                <img src={Proyecto05} alt="Projeto2" className="projetos-imagem" />
                <div className="overlay">
                    <a href="https://starwarsgallery.netlify.app/" target='_blank' rel='noopener, noreferrer'>
                        <FontAwesomeIcon icon={faExternalLinkAlt} size='2x' className="external-icon" />
                    </a>
                </div>
                <div className="caixa-textos-projeto">
                    <h3 className="info-projetos">Star Wars Gallery</h3>
                    <p className="paragrafo-projetos">StarWars Gallery es una aplicación web creada con React y Vite 
                        que muestra personajes, planetas y naves de Star Wars mediante APIs públicas. Presenta una 
                        galería dinámica, responsiva y basada en el ejemplo de Bootstrap Gallery, optimizada para 
                        ofrecer una experiencia visual limpia, rápida y moderna.</p>
                </div>
            </div>

            <div className="projetos-card">
                <img src={Proyecto06} alt="Projeto3" className="projetos-imagem" />
                <div className="overlay">
                    <a href="https://charactersstar-wars.netlify.app/" target='_blank' rel='noopener, noreferrer'>
                        <FontAwesomeIcon icon={faExternalLinkAlt} size='2x' className="external-icon" />
                    </a>
                </div>
                <div className="caixa-textos-projeto">
                    <h3 className="info-projetos">Star Wars Characters</h3>
                    <p className="paragrafo-projetos">Star Wars Characters es una aplicación web desarrollada con HTML, 
                        CSS y JavaScript que consume la API SWAPI para mostrar información y imágenes personalizadas 
                        de personajes icónicos. Un proyecto enfocado en mejorar habilidades de front-end, manejo de 
                        APIs y experiencia de usuario.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Proyectos