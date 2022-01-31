import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';

function App() {

  let nombre = "Guido Negrisoli"

  let style = {
    color:"red",backgroundColor:"Black"
  }

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

      <h1 style={style}>  {nombre} </h1>

      <NavBar/>

    </div> 
  );
}

export default App;
