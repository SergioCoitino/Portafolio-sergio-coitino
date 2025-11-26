import Formulario from './components/Contacto';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Proyectos from './components/Proyectos';
import Sobre from './components/Sobre';
import './index.css';


function App() {
  return (
    <>
    <div class="particulas"></div>
        <Header/>
        <Inicio/>
        <Sobre/>
        <Proyectos/>
        <Formulario/>
    </>
  );
}

export default App;

