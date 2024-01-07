import React from "react";
import proxy from "../proxy";
//import '../node_modules/bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
// /home/esteban/javaWebApi/testReact/clase9/frontend/src/ComponenteAlumno/Alumnos.jsx

function RenderFilas(props){
    let arrFilas = props.alumnos
    return arrFilas.map(alumno => (
        <tr scope='row'>
            {/* <td>{alumno.id}</td>     */}
            <td><a href={'/alumno/' + alumno.id}>{alumno.id}</a></td>  
            <td>{alumno.nombre}</td>    
            <td>{alumno.apellido}</td>    
            <td>{alumno.pais}</td>    
        
        </tr>
    ))
}



function Alumnos(){
    let [efecto, setEfecto] = React.useState('el efecto')
    let [arrAlumnos, setArrAlumnos] = React.useState ([])//guardado local de datos traidos. Inicializo array vacio

    React.useEffect(()=>{//
      //  alert('Se ejecuta cuando se renderiza el componente: ' + efecto)
    proxy.traerTodosLosAlumnos((datos)=> {
    if(datos.status != 'OK'){
         return
    }
    setArrAlumnos(datos.resultado)})
    }, [efecto])//acá van las variables a monitorear para que renderize ante un cambio. La primera vez siempre ejecuta

        window.setEfecto=setEfecto;

    return (
        <>
           <table className="table">
            <thread>
            <tr>
                <th scope='col'>id</th>
                <th scope='col'>Nombre</th>
                <th scope='col'>Apellido</th>
                <th scope='col'>Pais</th>

            </tr>
            </thread>  
            <tbody>
                <RenderFilas alumnos={arrAlumnos}/>
            </tbody>          
            </table> 
        
        </>
    )





}
export default Alumnos