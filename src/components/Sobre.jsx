import React from 'react';
import { getTranslation } from '../languages';

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaReact
} from 'react-icons/fa';

import {
    SiVite,
    SiMongodb,
    SiMysql
} from 'react-icons/si';


const Sobre = ({ lang }) => {

    const t = getTranslation(lang);

    return (
        <section id="sobre" className="sobre">

            <h2 className="seccion-titulo">
                {t.sobre.titulo}
            </h2>


            <div className="sobre-caixa">

                <p className="sobre-paragrafo">
                    {t.sobre.parrafo1}
                </p>

                <br />

                <p className="sobre-paragrafo">
                    {t.sobre.parrafo2}
                </p>

            </div>


            <br />


            <div className="sobre-caixa">

                {/* TECNOLOGIAS QUE UTILIZO */}

                <div className="skills-group">

                    <h4 className="tecnologias">
                        {t.sobre.skill1}
                    </h4>

                    <br />

                    <div className="skills-icons">

                        <div className="skill-item">
                            <FaHtml5 className="skill-icon html-icon" />
                            <p>HTML</p>
                        </div>

                        <div className="skill-item">
                            <FaCss3Alt className="skill-icon css-icon" />
                            <p>CSS</p>
                        </div>

                        <div className="skill-item">
                            <FaJs className="skill-icon javascript-icon" />
                            <p>JavaScript</p>
                        </div>

                        <div className="skill-item">
                            <FaNodeJs className="skill-icon node-icon" />
                            <p>Node.js</p>
                        </div>

                        <div className="skill-item">
                            <FaGitAlt className="skill-icon git-icon" />
                            <p>Git</p>
                        </div>

                        <div className="skill-item">
                            <FaGithub className="skill-icon github-icon" />
                            <p>GitHub</p>
                        </div>

                    </div>

                </div>


                <br />


                {/* ESTUDANDO / APERFEIÇOANDO */}

                <div className="skills-group">

                    <h4 className="tecnologias">
                        {t.sobre.skill2}
                    </h4>

                    <br />

                    <div className="skills-icons">

                        <div className="skill-item">
                            <FaReact className="skill-icon react-icon" />
                            <p>React JS</p>
                        </div>

                        <div className="skill-item">
                            <SiVite className="skill-icon vite-icon" />
                            <p>Vite</p>
                        </div>

                        <div className="skill-item">
                            <SiMongodb className="skill-icon mongodb-icon" />
                            <p>MongoDB</p>
                        </div>

                        <div className="skill-item">
                            <SiMysql className="skill-icon mysql-icon" />
                            <p>SQL / MySQL</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};


export default Sobre;