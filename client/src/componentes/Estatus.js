import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Estatus = () => {
    const [jugadores, setJugadores] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/equipos/")
            .then(res => {
                setJugadores(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    return(
        <div>
            <div className="m-4">
                <Link to="/" className='btn btn-success me-3'>Lista</Link>
                <Link to="/jugador/nuevo" className='btn btn-success me-3'>Nuevo Jugador</Link>
                <Link to="/estatus/juego/1" className='btn btn-success'>Estatus</Link>
            </div>
            
            <h1>Estado del jugador | Juego 1</h1>
            
            <table className="table table-hover mt-3">
                <thead>
                    <tr>
                        <th>Nombre de jugador</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jugadores.map((jugador, index) => (
                            <tr key={index}>
                                <td>{jugador.nombre}</td>
                                <td>
                                    <button className="btn btn-success me-3">Juega</button>
                                    <button className="btn btn-danger me-3">No juega</button>
                                    <button className="btn btn-warning">Indefinido</button>
                                </td>
                            </tr>
                            //Falto que los botones cambiaran al hacerles click, asi que solo los deje con estilos de bootstrap
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Estatus;