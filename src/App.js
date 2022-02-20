import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar';
import { Footer } from './componentes/Footer';
import Main from './componentes/Main/Main';
import ItemCount from './componentes/ItemCount';
import ItemList from './componentes/ItemListConteiner/ItemList';
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner';
import ApiHarry from './componentes/ItemListConteiner/ApiHarry';



function App() {
  return (


    <Main >
      
      <NavBar />

      <ApiHarry />

      <ItemListConteiner />

      <ItemCount stock={10} initial={1}  />

      <ItemList />

      <Footer />
    </Main>

  );
}

export default App;
