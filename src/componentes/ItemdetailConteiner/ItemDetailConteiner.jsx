import React, {useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import useFireStore from '../../hooks/useFireStore';
import { CarritoContext } from '../../Context/CarritoProvedor';


const ItemDetailConteiner = () => {

  const {id} = useParams()

  const {individual,load,getIndividualData} = useFireStore();

  useEffect(() => {
    getIndividualData({id})

  }, [])

  
  return <>
  {load ? <h1> ...Cargando</h1> : <ItemDetail item={individual}/>  }
  </>;
};
 

export default ItemDetailConteiner