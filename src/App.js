import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';
import DibujosComplejos from './components/Dibujos.Complejos';
import DibujoComplejoArray from './components/DibujoComplejoArray';
import PadreDeportes from './components/PadreDeportes';
function App() {
  return (
    <div className="App">
      {/* <DibujoComplejoArray/> */}
      {/* <Contador Inicio="1"/> */}
      <PadreDeportes/>
    </div>
  );
}

export default App;
