import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Todos = () => {
    const [jugadores, setJugadores] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/equipos/")
            .then(res => {
                setJugadores(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    const borrarEquipo = id => {
        axios.delete("http://localhost:8000/api/equipos/" + id)
            .then( res => {
                alert("Estas seguro que quieres borrar este jugador"); //Falto que se pudiera ver el nombre del jugador
                let nuevaLista = jugadores.filter(jugador => jugador._id !== id);
                setJugadores(nuevaLista);
            })
            .catch(err => console.log(err));
    }

    return(
        <div>
            <h1>Administrador de Equipo</h1>
            <Link to="/" className='btn btn-success me-3'>Lista</Link>
            <Link to="/jugador/nuevo" className='btn btn-success me-3'>Nuevo Jugador</Link>
            <Link to="/estado/juego/1" className='btn btn-success'>Estatus</Link>
            
            <table className="table table-hover mt-3">
                <thead>
                    <tr>
                        <th>Nombre de jugador</th>
                        <th>Posicion preferida</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jugadores.map((jugador, index) => (
                            <tr key={index}>
                                <td>{jugador.nombre}</td>
                                <td>{jugador.posicion}</td>
                                <td>
                                    <button className="btn btn-danger me-3" onClick={() => borrarEquipo(jugador._id)}>Borrar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Todos;