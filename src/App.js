import React from 'react';
import './App.css';
import Prueba3 from './componentes/prueba/Prueba3';
import CarritoProvedor from './Context/CarritoProvedor';
import Rutas from './routes';



function App() {
  return (
  <div className="app">
      <CarritoProvedor > 
       <Rutas/>
      { /* <Prueba3 /> */}
      </CarritoProvedor>
      
       </div>
    
  );
}

export default App;
