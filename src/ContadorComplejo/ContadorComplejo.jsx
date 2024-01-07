import React from 'react'
import ContadorSimple from '../ContadorSimple/ContadorSimple'

function ContadorComplejo(props) {
     let [cuenta, setCuenta] = React.useState(0)
     let arrValores = props.valores
///////////////////////////////////////////////////////////////////INICIO DE Origional///////////////////////
    {
        cuenta = calcularTotal(arrValores)
    }

    function calcularTotal(unArray) {
        let total = arrValores.reduce((acum, item) => {
            return acum + item
        }, 0)
        return total
    }

    function volverAsetearCuenta() {
        setCuenta(calcularTotal(arrValores))
    }

    function eventoRecalcularTotal(idx, totalItem) {
        arrValores[idx] = totalItem
        console.log(arrValores)
        volverAsetearCuenta()
    }

    function ComponenteVariosBotones() {
        return arrValores.map((vs, idx) => {
            return (
                <>
                <ContadorSimple key={idx} inicial={vs} paso={idx} cuandoHaceClick={(totalItem) => eventoRecalcularTotal(idx, totalItem)}>
                </ContadorSimple>
                </>
            )
        })
    }
///////////////////////////////////////////////////////////////////FIN DE Origional///////////////////////
   ///////////////////////////////////////////INICIO DE Codigo propio hasta clase 9 1h 53'(Actualiza la visualizacion de la suma una sola vez)////////////////////////////////////////////

    // function volverAsetearCuenta() {  //enmascaro la la funcion reduce
    //         let suma = props.valores.reduce((acum, item)=>{//La función reduce() se utiliza para reducir un array a un solo valor. 
    //             return acum + item                       //Toma una función de reducción como argumento, la cual se aplica a cada elemento del array resultando en un único valor de retorno
    //         }, 0)
    //         setCuenta(suma)

    // }
    // function eventoRecalcularTotal(){
    //     volverAsetearCuenta()
    // }


    // function ComponenteVariosBotones(){  //Acád efino el map. Cuando son varios componetes de debe pasar el key. El subinidice es idx
    //     return props.valores.map((vs, idx)=>{
    //        return ( <ContadorSimple key={idx} inicial={vs} paso={idx} cuandoHaceClick={()=>{eventoRecalcularTotal()}}/>)
    //     })
    // }
////////////////////////////////////////FIN DE Codigo propio hasta clase 9 1h 53'/////////////////////////////////////////////


    return (
        <>
           <h1>Este es el apartado del contador complejo</h1>
             <ComponenteVariosBotones valores={props.valores}></ComponenteVariosBotones>
           
            <h1>Suma Total: {cuenta}</h1>
        </>
    )
}

export default ContadorComplejo