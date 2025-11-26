import React from 'react'
import Profile from '../assets/Sergio_Coitino.jpeg';
import { getTranslation } from '../languages'


const Inicio = ({ lang, setLang }) => {
  const t = getTranslation(lang);
  return (
    <main id="inicio" class="cabecalho">
        <img src={Profile} alt="Foto de Sergio Coitiño" class="foto-perfil" />
        <h1>Sergio Coitiño</h1>
        <p class="cabecalho-sub-titulo">{t.home.title_home}</p>
    </main>
  )
}

export default Inicio