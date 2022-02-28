import React from 'react';
import './App.css';
import CarritoProvedor from './Context/CarritoProvedor';
import Rutas from './routes';



function App() {
  return (
  <div className="app">
      <CarritoProvedor > 
       <Rutas/>
      </CarritoProvedor>
      
       </div>
    
  );
}

export default App;
