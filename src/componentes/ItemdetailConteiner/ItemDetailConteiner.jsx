import React, {useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { CarritoContext } from '../../Context/CarritoProvedor';


const ItemDetailConteiner = () => {

  const {nombre,apellido,edad} = useContext(CarritoContext)
  console.log(nombre,apellido,edad)

  const [data, setData] = useState(null);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ 
          id: 1,
          nombre: "LALAALALALAL",
          img: "",
          stock:10 ,
          precio: 1000,
          descripcion:"asdasdasdasdsa",
        });
      }, 2000);
    }).then((res) => setData(res));

    return () => {
      setData({});
    };
  }, []);

  return <>
  {data ? <ItemDetail item={data}/> : <h1> ...Cargando</h1>}
  </>;
};
 //  const params = useParams()
  // console.log (params)

 // return (
   // <div>{params.id}</div>
 // )
//}

export default ItemDetailConteiner