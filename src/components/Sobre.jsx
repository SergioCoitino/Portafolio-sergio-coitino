import React from 'react'

function Sobre() {
  return (
    <section id="sobre" class="sobre">

        <h2 class="seccion-titulo">Sobre mi</h2>
        <div class="sobre-caixa">
            <p sobre-paragrafo>
              Hola, soy Sergio Coitiño, desarrollador web con enfoque en Front End y en formación para 
              convertirme en Full Stack Developer. He trabajado en proyectos utilizando HTML, CSS, JavaScript, 
              React JS, Vite, y también cuento con experiencia en backend con Node.js.
              <br /><br />
              Me gusta construir interfaces funcionales y bien estructuradas, aplicar buenas prácticas y llevar 
              mis proyectos desde la idea hasta el despliegue usando Git, GitHub y servicios de hosting.
              Sigo aprendiendo y perfeccionando mis habilidades para crecer como profesional dentro del mundo del
               desarrollo web.
              </p>
        </div>

        <br />
        
        <div class="sobre-caixa">
              <div class="skills-group">
                <h4 className='tecnologias'>Tecnologías que utilizo</h4>
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
                <h4 className='tecnologias'>Actualmente Estudiando / Mejorando</h4>
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