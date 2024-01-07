import React from 'react'
import './estilo.css'

function ContadorSimple(props) {
    let [cuenta, setCuenta] = React.useState(props.inicial)  //cuando cuenta cambia, renderiza solo lo que corresponde.UseState te da el valor actual y una funcion para modificarlo [cuenta, setCuenta]

    let incrementar = () => {
        let total = cuenta + props.paso
        setCuenta(total)
        if (props?.cuandoHaceClick) { //expresar props?. espera el evento si esta definido. pero si no lo esta no falla
            props.cuandoHaceClick(total)
        }
    }

    return (
        <>
            <button className="espacio" onClick={incrementar}>{cuenta}</button>
        </>
    )
}

export default ContadorSimple