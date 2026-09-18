import React from 'react';

import Proyecto01 from '../assets/proyectos/IMC.png';
import Proyecto02 from '../assets/proyectos/LinkInBio.jpeg';
import Proyecto05 from '../assets/proyectos/StarWarsGallery.png';
import Proyecto07 from '../assets/proyectos/star-wars-app.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { getTranslation } from '../languages';


const Proyectos = ({ lang }) => {

    const t = getTranslation(lang);

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


    return (
        <section
            id="proyectos"
            className="projetos"
        >

            <h2 className="seccion-titulo">
                {t.proyectos.titulo}
            </h2>


            <div className="projetos-caixa">

                {projetos.map((projeto) => (

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


                        {/* INFORMAÇÕES */}

                        <div className="caixa-textos-projeto">

                            <h3 className="info-projetos">
                                {projeto.titulo}
                            </h3>


                            <p className="paragrafo-projetos">
                                {projeto.descricao}
                            </p>


                            {/* TECNOLOGIAS */}

                            <div className="projeto-tecnologias">

                                {projeto.tecnologias.map(
                                    (tecnologia) => (

                                        <span key={tecnologia}>
                                            {tecnologia}
                                        </span>

                                    )
                                )}

                            </div>


                            {/* BOTÕES */}

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

                ))}

            </div>

        </section>
    );
};


export default Proyectos;