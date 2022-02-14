import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const ItemListConteiner = ({ greeting}) => {

    const data = [{ID:1, nombre:"Mini Lama", precio: 40 ,Stock:40 },{ID:2,nombre:"Lama", precio:70, stock:10}];

    const [info,setInfo] = useState(null);
  

    useEffect(() => { 

        const tarea = new Promise ((resolve,reject) => {
            setTimeout(() =>{ 
               resolve(data);
          }, 3000);

        }); 
        
     tarea
        .then((result) => {
             //aca caen los resultados tipo fullfilled¬ o satisdactorias
             
             setInfo(result);
     
         }).catch(err => {
             //esto atrapa cualquier resultado tipo reject o no esperado
           console.log(err);
         });

    }, [])
    
 
  return <h1>{info && info.map((i) => <p>{i.nombre}</p>)}</h1>;
};

export default ItemListConteiner;
