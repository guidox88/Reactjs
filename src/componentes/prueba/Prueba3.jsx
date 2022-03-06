import React, {useState,useEffect} from "react";
 

const TextComponent = ({condicion}) => {
        const config ={
           className:`${condicion ? "text-danger" : "text-success"  }`
        }

    return <h1{...config} > Probando</h1>
}
       
    const Prueba3 = () => {

        const [loading, setLoading] = useState(true);

        useEffect(() => {
          setTimeout(() => {
              setLoading(false)
          }, 10000);
        
          return () => {
            setLoading(true)
          }
        }, [])
        
    
    return (
        <>
           {loading && <h1>Loading... </h1> }
           <TextComponent condicion={true} otroEstilo="text-center"/>
        </>
       
    );
  };


export default Prueba3