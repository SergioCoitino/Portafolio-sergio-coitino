import React, { useState } from "react";
import Formulario from './components/Contacto';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Proyectos from './components/Proyectos';
import Sobre from './components/Sobre';
import './index.css';


function App() {

  const [lang, setLang] = useState("pt");

  return (
    <>
    <div class="particulas"></div>
        <Header lang={lang} setLang={setLang}/>
        <Inicio lang={lang} setLang={setLang}/>
        <Sobre lang={lang} setLang={setLang}/>
        <Proyectos lang={lang} setLang={setLang}/>
        <Formulario lang={lang} setLang={setLang}/>
    </>
  );
}

export default App;

