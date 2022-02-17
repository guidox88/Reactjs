import React, { useEffect, useState } from 'react';
import axios from "axios";
import Item from './Item';

const ApiHarry = ({ greeting }) => { 
    const data = [{nombre: "Minilama" }, { nombre:"Lama"} ];


 const [info, setInfo] = useState(null);

 

const getData = async () =>{
       try{
           const response = await axios.get("http://hp-api.herokuapp.com/api/characters" );
           
           console.log(response.data [0])
            console.log(response.data[3])
         } catch (error) {
       console.log(error);
    }   
};

useEffect(() => {
    getData();

}, []);

  return   <h1>Api Harry</h1>;
           
             
    
};

export default ApiHarry;