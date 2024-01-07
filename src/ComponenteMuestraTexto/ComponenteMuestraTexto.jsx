import React from "react"

function ComponenteMuestraTexto(props){

function Scroll(){
return props.textos.map((vs, idx)=>{
    
    return(<>
    <hr />
    <h1>El texto del subindice {idx} es: {vs}    </h1>
    
    </>)
})
   
}

return(
    <>
    <Scroll />
    
    
    </>
)


}

export default ComponenteMuestraTexto