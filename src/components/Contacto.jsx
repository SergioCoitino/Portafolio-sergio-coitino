import React, { useState } from 'react';
// import Translate from './Translate';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const enviarWhats = (event) => {
    event.preventDefault();

    const telefono = '5531989296557';
    const texto = `${mensaje}. Mensaje de ${nombre}`;

    const mensajeFormato = encodeURIComponent(texto);
    const url = `https://wa.me/${telefono}?text=${mensajeFormato}`;

    window.open(url, '_blank');

    setNombre('');
    setMensaje('');
  };

  return (
    <>
  <section id="contacto" className="contatos">
    <h2 className="seccion-titulo">Entre en contacto</h2>

    <form className="formulario-contato" id="formulario" onSubmit={enviarWhats}>
        <div className="grupo-form">
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="campo-form"
            placeholder="Nombre"
          />
        </div>

        <div className="grupo-form">
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="campo-form"
            placeholder="Escriba aqui su mensaje"
            rows="6"
          />
        </div>

        <button type="submit"  className="botao-form">Enviar WhatsApp</button>
        
    </form>
  </section>

  <footer className='footer'>
          <a 
            href="https://github.com/SergioCoitino" 
            target="_blank"
            rel='noopener noreferrer'>
            <p>Desarrollado por Sergio Coitiño.</p>
          </a>
          <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>

  </footer>
  </>
  );
};

export default Formulario;