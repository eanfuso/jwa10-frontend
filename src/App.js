//import logo from './logo.svg';
import './App.css';
import ContadorComplejo from './ContadorComplejo/ContadorComplejo'
import ContadorSimple from './ContadorSimple/ContadorSimple';
import { NavLink, Route, Routes, Redirect, Switch, BrowserRouter } from 'react-router-dom'
import ComponenteAzul from './ComponenteAzul/ComponenteAzul'
import ComponenteRojo from './ComponenteRojo/ComponenteRojo'
import ComponenteMuestraTexto from './ComponenteMuestraTexto/ComponenteMuestraTexto';
import Menu from './Menu/menu';
import Alumnos from './Alumnos/Alumnos';
import proxy from './proxy';
import RenderAlumno from './RenderAlumno/RenderAlumno'

/*
Desafio pasar un numero en las properties
y mosrar ese numero multiplicado por si mismo
*/

function App(props) {
  let cuadrado = x => x * x

  function recibirEvento() {  //Como propagar un evento?
    alert('estoy en recibir evento')
  }

  function ComponerContadorComplejo() {
      return (
        <>
            <hr />
            <ContadorComplejo valores={[5,4,3,2,1]}></ContadorComplejo>
            
        </>
      )
  }

  function Rutas() {
      return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path="/rojo" element={<ComponenteRojo />}></Route>
                <Route path="azul" element={<ComponenteAzul />}></Route>
                <Route path="contador" element={<ComponerContadorComplejo />}></Route>
                <Route path="alumno" element={<Alumnos />}></Route>
                <Route path="alumno/:id" element={<RenderAlumno />}></Route>
            </Routes>
        </BrowserRouter>
      </>
      )
  }

  return (
    <>
        <h1>{props.titulo}</h1>
        <Menu/>
         {/* <ContadorSimple inicial={10} paso ={2} cuandoHaceClick={recibirEvento}/> 
         <ContadorSimple inicial={30} paso ={3} cuandoHaceClick={recibirEvento}/> 
         <hr/>
         {/* <ContadorComplejo valores={[5,4,3,2,1]}/> */}
         <hr/>
         {/* <ComponenteMuestraTexto textos={['hola', 'que', 'tal', 'que', 'tal']}/> */} 

        {/* <h5>La idea es que aca, haya un menu con opciones</h5>
        <h5>En principio, rojo, azul, contador</h5>  */}
       <Rutas></Rutas>
    </>
  );
}
/*
// <ContadorComplejo></ContadorComplejo>
*/

export default App;
