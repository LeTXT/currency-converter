
import './App.css';
import Conversor from './components/Conversor'

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <div className='linha'>
        <Conversor moedaA='USD' moedaB='BRL'></Conversor>
    <Conversor moedaA='BRL' moedaB='USD'></Conversor>
    </div>
    </div>
  );
}

export default App;
