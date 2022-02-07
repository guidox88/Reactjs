
import './App.css';
import NavBar from './componentes/NavBar';
import Menu from './componentes/Menu';
import Accordion from './componentes/Accordion/Accordion';
import { Footer } from './componentes/Footer';
import Button from './componentes/UI/Button';
import Main from './componentes/Main/Main';



function App() {
  return (

    <Main >
      <Menu 
        textoDeLogo={"Adidas"}
        dropDown
        className={"navbar navbar-expand-lg navbar-dark bg-primary"}/> 
      <NavBar />
      
      
      <Accordion />
      <Button className="btn btn-danger mx-4" text="Cuidado" />
      <Button className="btn btn-warning mx-4" text="Alerta" />
      <Button className="btn btn-info mx-4" text="info" />
      <Footer />
    </Main>

  );
}

export default App;
