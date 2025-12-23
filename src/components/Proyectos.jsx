import React from 'react'
import Proyecto01 from '../assets/proyectos/IMC.png'
import Proyecto02 from '../assets/proyectos/LinkInBio.png'
import Proyecto03 from '../assets/proyectos/Batman_FanPage.png'
import Proyecto04 from '../assets/proyectos/Portfolio.png'
import Proyecto05 from '../assets/proyectos/StarWarsGallery.png'
import Proyecto06 from '../assets/proyectos/StarWarsCharacters.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { getTranslation } from '../languages'


const Proyectos = ({ lang, setLang }) => {
    const t = getTranslation(lang);
  return (
    <section id="proyectos" className="projetos">
        <h2 className="seccion-titulo">{t.proyectos.titulo}</h2>
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
                    <p className="paragrafo-projetos">{t.proyectos.descripcion01}</p>
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
                    <p className="paragrafo-projetos">{t.proyectos.descripcion02}</p>
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
                    <p className="paragrafo-projetos">{t.proyectos.descripcion04}</p>
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
                    <p className="paragrafo-projetos">{t.proyectos.descripcion05}</p>
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
                    <p className="paragrafo-projetos">{t.proyectos.descripcion06}</p>
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
                    <p className="paragrafo-projetos">{t.proyectos.descripcion03}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Proyectos