import logo from './logo.svg';
import './App.css';

function App() {

  let contador = 1;

  contador++ ;
  console.log(contador);

  let edad = 18;

  if(edad >= 18) {
    console.log("es mayor de edad") :
    {else if{ ( edad > 0 && edad 18)
    }else{
    console.log("es menor de edad");
  }
  
  edad >= 18 ? console.log("esmayo de edad") :
  ( edad > 0 && edad < 18) ? console.log("es menor de edad")
  : console.log("es menor de edad");

  mensaje = `Juean puede pasar al boliche ya que tiene" ${edad} "y puede acceder a los tragos en algohol`
  
  console.log(mensaje);




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
