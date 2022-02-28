import React from 'react'

const Prueba = () => {

const getName = ({name, e}) => {
    e.stopPropagation()
    e.preventDefault()
        alert(name)
}
const sinProps = () => {
    console.log("Sin props")
}

const sinVocales = (e) =>{
    if(
     e.key ==="a" ||
     e.key ==="e" || 
     e.key ==="i" ||
     e.key ==="o" ||
     e.key ==="u"
     ){
        return;
    }
    console.log(e.key)
}

  return (

    <>
    <button onClick={(e) => getName({name:"guido",e})}>Dame nombre</button>
    <button onClick={sinProps}>Dame nombre</button>
    <input type= "text" onKeyDown={sinVocales} />
    </>    
  )
}

export default Prueba