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
            console.log(response.data[1])
            console.log(response.data[3])
            console.log(response.data[3])
            console.log(response.data[4])
            console.log(response.data[5])
            console.log(response.data[6])
            console.log(response.data[7])
            console.log(response.data[8])
            console.log(response.data[9])
            console.log(response.data[10])
         } catch (error) {
       console.log(error);
    }   
};

useEffect(() => {
    getData();

}, []);

  return  <>
   <h1>Api Harry</h1>;

            <div>nombre:{getData.data} </div>;
          
   </>
    
};

export default ApiHarry;