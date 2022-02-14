import React, { useEffect } from 'react';
import Item from './Item';
import { useState } from 'react/cjs/react.development';


const ItemList = ({items}) => {
  items = [
   { id:1,
     img:"https://http2.mlstatic.com/D_NQ_NP_764808-MLA45557311923_042021-O.jpg",
    nombre:"Mini Lama",
    stock:20,
    precio:40,


  },

  { id:2,
    nombre:"Lama",
    img:"https://http2.mlstatic.com/D_NQ_NP_793129-MLA46808774974_072021-O.jpg",
    stock:20,
    precio:40,
    
  },

  ];

  const [ItemList,setInfo] = useState(null);

  useEffect(() => { 

    const tarea = new Promise ((resolve,reject) => {
        setTimeout(() =>{ 
           resolve(ItemList);
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
  
  return (
    <>
    {items.map((item) => ( <Item item={item} key={item.id} />))}
    </>
  )

 
}
export default ItemList;
