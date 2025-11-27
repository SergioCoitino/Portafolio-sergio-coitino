import React, { useState } from 'react';
import { getTranslation } from '../languages'


const Formulario = ({ lang, setLang }) => {
  const t = getTranslation(lang);
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const enviarWhats = (event) => {
    event.preventDefault();

    const telefono = '5531989296557';
    const texto = `${mensaje}. (${nombre})`;

    const mensajeFormato = encodeURIComponent(texto);
    const url = `https://wa.me/${telefono}?text=${mensajeFormato}`;

    window.open(url, '_blank');

    setNombre('');
    setMensaje('');
  };

  return (
    <>
  <section id="contacto" className="contatos">
    <h2 className="seccion-titulo">{t.contacto.titulo}</h2>

    <form className="formulario-contato" id="formulario" onSubmit={enviarWhats}>
        <div className="grupo-form">
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="campo-form"
            placeholder={t.contacto.nombre_placeholder}
          />
        </div>

        <div className="grupo-form">
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="campo-form"
            placeholder={t.contacto.mensaje_placeholder}
            rows="6"
          />
        </div>

        <button type="submit"  className="botao-form">{t.contacto.boton}</button>
        
    </form>
  </section>

  <footer className='footer'>
          <a 
            href="https://github.com/SergioCoitino" 
            target="_blank"
            rel='noopener noreferrer'>
            <p>{t.contacto.developed}</p>
          </a>
          <p>&copy; {new Date().getFullYear()} {t.contacto.rights}</p>

  </footer>
  </>
  );
};

export default Formulario;