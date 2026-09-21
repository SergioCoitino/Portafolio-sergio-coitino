import React from 'react';
import { getTranslation } from '../languages';


const Inicio = ({ lang }) => {

    const t = getTranslation(lang);

    return (
        <main
            id="inicio"
            className="cabecalho"
        >

            <img
                src="/images/Sergio_Coitino.webp"
                alt="Foto de Sergio Coitiño"
                className="foto-perfil"
                width="210"
                height="210"
                decoding="async"
                fetchPriority="high"
            />

            <h1>
                Sergio Coitiño
            </h1>

            <p className="cabecalho-sub-titulo">
                {t.home.title_home}
            </p>

            <p className="cabecalho-sub-titulo tecnologias-home">
                {t.home.title_home2}
            </p>


            <div className="cabecalho-botoes">

                {/* VER PROJETOS */}

                <a
                    href="#proyectos"
                    className="botao-inicio botao-principal"
                >
                    {lang === 'es'
                        ? 'Ver proyectos'
                        : 'Ver projetos'
                    }
                </a>


                {/* GITHUB */}

                <a
                    href="https://github.com/SergioCoitino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="botao-inicio botao-secundario"
                >
                    GitHub
                </a>


                {/* CURRÍCULO */}

                <a
                    href={
                        lang === 'es'
                            ? '/Sergio_Coitino_Curriculo_ES.pdf'
                            : '/Sergio_Coitino_Curriculo_PT.pdf'
                    }
                    download
                    className="botao-inicio botao-curriculo"
                >
                    {lang === 'es'
                        ? 'Descargar CV'
                        : 'Baixar CV'
                    }
                </a>

            </div>

        </main>
    );
};


export default Inicio;