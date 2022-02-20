import Item from './Item';
import ItemList from './ItemList';
import React, { useState, useEffect } from 'react'

const ItemListConteiner = ({greeting}) => {

    const data = [(<ItemList />)] ;

    const [info, setInfo] = useState(null);

  useEffect(() => { 

    const tarea = new Promise ((resolve,reject) => {
        setTimeout(() =>{ 
           resolve(data);
      }, 2000);

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
 
  return <> {info && info.map((i) => <p>{i.nombre}</p>)}</>
}

export default ItemListConteiner;
