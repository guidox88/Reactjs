import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar';
import { Footer } from './componentes/Footer';
import Main from './componentes/Main/Main';
import ItemCount from './componentes/ItemCount';
import ItemList from './componentes/ItemListConteiner/ItemList';
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner';
import ApiHarry from './componentes/ItemListConteiner/ApiHarry';
import Rutas from './routes';


function App() {
  return (
  <div className="app">
      <NavBar />
      <Rutas/>
       </div>
  );
}

export default App;
