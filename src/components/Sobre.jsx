import React from 'react';
import { getTranslation } from '../languages';

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
                            <i className="devicon-html5-plain colored"></i>
                            <p>HTML</p>
                        </div>

                        <div className="skill-item">
                            <i className="devicon-css3-plain colored"></i>
                            <p>CSS</p>
                        </div>

                        <div className="skill-item">
                            <i className="devicon-javascript-plain colored"></i>
                            <p>JavaScript</p>
                        </div>

                        <div className="skill-item">
                            <i className="devicon-nodejs-plain colored"></i>
                            <p>Node.js</p>
                        </div>

                        <div className="skill-item">
                            <i className="devicon-git-plain colored"></i>
                            <p>Git</p>
                        </div>

                        <div className="skill-item">
                            <i className="devicon-github-original"></i>
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
                            <i className="devicon-react-original colored"></i>
                            <p>React JS</p>
                        </div>

                        <div className="skill-item">
                            <i className="devicon-vitejs-plain colored"></i>
                            <p>Vite</p>
                        </div>

                        <div className="skill-item">
                            <i className="devicon-mongodb-plain colored"></i>
                            <p>MongoDB</p>
                        </div>

                        <div className="skill-item">
                            <i className="devicon-mysql-plain colored"></i>
                            <p>SQL / MySQL</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Sobre;