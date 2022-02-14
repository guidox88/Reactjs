
import './App.css';
import NavBar from './componentes/NavBar';
import { Footer } from './componentes/Footer';
import Main from './componentes/Main/Main';
import ItemCount from './componentes/ItemCount';
import ItemListConteiner from './componentes/itemListConteiner.jsx/ItemListConteiner';
import ItemList from './componentes/itemListConteiner.jsx/ItemList';




function App() {
  return (

    <Main >
      
      <NavBar />
      <ItemListConteiner /> 
      <ItemCount stock={10} initial={1}  />

      <ItemList />
      <Footer />
    </Main>

  );
}

export default App;
