import React, { useState } from 'react';

import Proyecto01 from '../assets/proyectos/IMC.png';
import Proyecto02 from '../assets/proyectos/LinkInBio.jpeg';
import Proyecto03 from '../assets/proyectos/Batman_FanPage.png';
import Proyecto04 from '../assets/proyectos/Portfolio.png';
import Proyecto05 from '../assets/proyectos/StarWarsGallery.png';
import Proyecto06 from '../assets/proyectos/StarWarsCharacters.png';
import Proyecto07 from '../assets/proyectos/star-wars-app.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faExternalLinkAlt,
    faChevronDown,
    faChevronUp
} from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { getTranslation } from '../languages';


const Proyectos = ({ lang }) => {

    const t = getTranslation(lang);

    const [mostrarOutros, setMostrarOutros] = useState(false);


    /* =========================
       PROJETOS PRINCIPAIS
    ========================= */

const projetos = [
    {
        id: 1,
        titulo: 'Star Wars App',
        imagem: Proyecto07,
        descricao: t.proyectos.descripcion07,

        demo: 'https://star-warsapp.netlify.app/',
        github: 'https://github.com/SergioCoitino/StarWars-App',

        tecnologias: [
            'React',
            'JavaScript',
            'REST API',
            'CSS'
        ],

        destaque: true
    },

    {
        id: 2,
        titulo: 'Star Wars Gallery',
        imagem: Proyecto05,
        descricao: t.proyectos.descripcion05,

        demo: 'https://starwarsgallery.netlify.app/',
        github: 'https://github.com/SergioCoitino/StarWars-Gallery',

        tecnologias: [
            'React',
            'JavaScript',
            'SWAPI',
            'Vite'
        ]
    },

    {
        id: 3,
        titulo: 'Calculadora IMC',
        imagem: Proyecto01,
        descricao: t.proyectos.descripcion01,

        demo: 'https://calculadora-bmi-imc.netlify.app/',
        github: 'https://github.com/SergioCoitino/IMC-Calculadora-2.0',

        tecnologias: [
            'HTML',
            'CSS',
            'JavaScript'
        ]
    },

    {
        id: 4,
        titulo: 'Link In Bio',
        imagem: Proyecto02,
        descricao: t.proyectos.descripcion02,

        demo: 'https://sergio-coitino.netlify.app/',
        github: 'https://github.com/SergioCoitino/Link-in-Bio',

        tecnologias: [
            'HTML',
            'CSS',
            'JavaScript'
        ]
    }
];


const outrosProjetos = [
    {
        id: 5,
        titulo: 'Star Wars Characters',
        imagem: Proyecto06,
        descricao: t.proyectos.descripcion06,

        demo: 'https://charactersstar-wars.netlify.app/',
        github: 'https://github.com/SergioCoitino/Star-Wars-Characters',

        tecnologias: [
            'HTML',
            'CSS',
            'JavaScript',
            'SWAPI'
        ]
    },

    {
        id: 6,
        titulo: 'Portfolio',
        imagem: Proyecto04,
        descricao: t.proyectos.descripcion04,

        demo: 'https://sergio-coitino-portfolio.netlify.app/',
        github: 'https://github.com/SergioCoitino/Portafolio-sergio-coitino',

        tecnologias: [
            'React',
            'JavaScript',
            'CSS'
        ]
    },

    {
        id: 7,
        titulo: 'Batman Page',
        imagem: Proyecto03,
        descricao: t.proyectos.descripcion03,

        demo: 'https://projeto-batman1.netlify.app/',
        github: 'https://github.com/SergioCoitino/Projeto-Batman',

        tecnologias: [
            'HTML',
            'CSS',
            'JavaScript'
        ]
    }
];

    /* =========================
       CARD REUTILIZÁVEL
    ========================= */

    const renderProjeto = (projeto) => (

        <article
            key={projeto.id}
            className={`projetos-card ${
                projeto.destaque
                    ? 'projeto-destaque'
                    : ''
            }`}
        >

            {/* IMAGEM */}

            <div className="projeto-imagem-container">

                <img
                    src={projeto.imagem}
                    alt={`Preview do projeto ${projeto.titulo}`}
                    className="projetos-imagem"
                />

                <div className="overlay">

                    <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        size="2x"
                        className="external-icon"
                    />

                </div>

            </div>


            {/* CONTEÚDO */}

            <div className="caixa-textos-projeto">

                <h3 className="info-projetos">
                    {projeto.titulo}
                </h3>


                <p className="paragrafo-projetos">
                    {projeto.descricao}
                </p>


                {/* TECNOLOGIAS */}

                <div className="projeto-tecnologias">

                    {projeto.tecnologias.map((tecnologia) => (

                        <span key={tecnologia}>
                            {tecnologia}
                        </span>

                    ))}

                </div>


                {/* LINKS */}

                <div className="projeto-links">

                    <a
                        href={projeto.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="botao-projeto botao-demo"
                        aria-label={`Abrir demonstração do projeto ${projeto.titulo}`}
                    >

                        <FontAwesomeIcon
                            icon={faExternalLinkAlt}
                        />

                        Demo

                    </a>


                    <a
                        href={projeto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="botao-projeto botao-github"
                        aria-label={`Ver código do projeto ${projeto.titulo} no GitHub`}
                    >

                        <FontAwesomeIcon
                            icon={faGithub}
                        />

                        GitHub

                    </a>

                </div>

            </div>

        </article>

    );


    return (

        <section
            id="proyectos"
            className="projetos"
        >

            <h2 className="seccion-titulo">
                {t.proyectos.titulo}
            </h2>


            {/* =========================
                PROJETOS PRINCIPAIS
            ========================= */}

            <div className="projetos-caixa">

                {projetos.map(renderProjeto)}

            </div>


            {/* =========================
                BOTÃO OUTROS PROJETOS
            ========================= */}

            <div className="outros-projetos-controle">

                <button
                    type="button"
                    className="botao-outros-projetos"
                    onClick={() =>
                        setMostrarOutros(
                            !mostrarOutros
                        )
                    }
                    aria-expanded={mostrarOutros}
                    aria-controls="outros-projetos"
                >

                    {mostrarOutros
                        ? (
                            <>
                                {lang === 'es'
                                    ? 'Ocultar proyectos'
                                    : 'Ocultar projetos'
                                }

                                <FontAwesomeIcon
                                    icon={faChevronUp}
                                />
                            </>
                        )
                        : (
                            <>
                                {lang === 'es'
                                    ? 'Ver otros proyectos'
                                    : 'Ver outros projetos'
                                }

                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                />
                            </>
                        )
                    }

                </button>

            </div>


            {/* =========================
                OUTROS PROJETOS
            ========================= */}

            <div
                id="outros-projetos"
                className={`outros-projetos-wrapper ${
                    mostrarOutros
                        ? 'aberto'
                        : ''
                }`}
            >

                <div className="outros-projetos">

                    {outrosProjetos.map(renderProjeto)}

                </div>

            </div>

        </section>

    );
};


export default Proyectos;