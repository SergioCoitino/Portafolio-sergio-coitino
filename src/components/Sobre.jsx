import React from 'react'
import { getTranslation } from '../languages'


const Sobre = ({ lang, setLang }) => {
    const t = getTranslation(lang);
  return (
    <section id="sobre" class="sobre">

        <h2 class="seccion-titulo">{t.sobre.titulo}</h2>
        <div class="sobre-caixa">
            <p sobre-paragrafo>{t.sobre.parrafo1}</p>
            <br />
            <p sobre-paragrafo >{t.sobre.parrafo2}</p>
        </div>
        <br />
        <div class="sobre-caixa">
              <div class="skills-group">
                <h4 className='tecnologias'>{t.sobre.skill1}</h4>
                <br />
                <div class="skills-icons">
                  
                  <div class="skill-item">
                    <i class="devicon-html5-plain colored"></i>
                    <p>HTML</p>
                  </div>

                  <div class="skill-item">
                    <i class="devicon-css3-plain colored"></i>
                    <p>CSS</p>
                  </div>

                  <div class="skill-item">
                    <i class="devicon-javascript-plain colored"></i>
                    <p>JavaScript</p>
                  </div>

                  <div class="skill-item">
                    <i class="devicon-nodejs-plain colored"></i>
                    <p>Node.js</p>
                  </div>

                  <div class="skill-item">
                    <i class="devicon-git-plain colored"></i>
                    <p>Git</p>
                  </div>

                  <div class="skill-item">
                    <i class="devicon-github-original"></i>
                    <p>GitHub</p>
                  </div>

                </div>
              </div>
              <br />
              <div class="skills-group">
                <h4 className='tecnologias'>{t.sobre.skill2}</h4>
                <br />  
                <div class="skills-icons">

                  <div class="skill-item">
                    <i class="devicon-react-original colored"></i>
                    <p>React JS</p>
                  </div>

                  <div class="skill-item">
                    <i class="devicon-vitejs-plain colored"></i>
                    <p>Vite</p>
                  </div>

                  <div class="skill-item">
                    <i class="devicon-mongodb-plain colored"></i>
                    <p>MongoDB</p>
                  </div>

                  <div class="skill-item">
                    <i class="devicon-mysql-plain colored"></i>
                    <p>SQL / MySQL</p>
                  </div>

                </div>
              </div>
        </div>

    </section>
  )
}

export default Sobre