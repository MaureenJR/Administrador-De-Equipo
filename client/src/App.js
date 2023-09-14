
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Todos from './componentes/Todos';
import Jugador from './componentes/Jugador';
import Estatus from './componentes/Estatus';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to={"/jugadores/lista"}/>}/>
        <Route path='/jugadores/lista' element={<Todos/>}/>
        <Route path='/jugador/nuevo' element={<Jugador/>}/>
        <Route path='/estado/juego/1' element={<Estatus/>}/>
      </Routes>
    </div>
  );
}

export default App;
