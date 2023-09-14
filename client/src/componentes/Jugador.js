import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Jugador = () => {
    const [nombre, setNombre] = useState("");
    const [posicion, setPosicion] = useState("");

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const guardarJugador = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/equipos", {
            nombre,
            posicion
        })
            .then( res => {
                setNombre("");
                setPosicion("")
                navigate("/");
            })
            .catch(err => setErrors(err.response.data.errors));
    }

    return(
        <div className="w-25 m-auto mt-5 card p-3">
            <h1 className="mb-3">Nuevo Jugador</h1>
            <form onSubmit={guardarJugador}>
                <div className="mb-2">
                    <label>Nombre:</label>
                    <input className="form-control text-center" id="nombre" name="nombre" type="text" onChange={e => setNombre(e.target.value)} value={nombre}/>
                    {errors.nombre ? <span className="text-danger">{errors.nombre.message}</span> : null}
                </div>
                <div className="mb-2">
                    <label>Posicion:</label>
                    <input className="form-control text-center" id="posicion" name="posicion" type="text" onChange={e => setPosicion(e.target.value)} value={posicion}/>
                </div>
                <input type="submit" className="btn btn-success mt-3" value="Guardar Jugador"/>
            </form>
        </div>
    );
}

export default Jugador;