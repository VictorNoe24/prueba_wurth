import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {useContext} from "react";

export const useLogin = () => {
    const navigate = useNavigate()
    const { login } = useContext( AuthContext )
    const getLogin = async ( email, password ) => {
        await fetch(`http://localhost:8080/api/usuarios/${email}`, {
            method: "GET",
            headers: {
                "Content-Type":"application/json",
            },
        })
            .then((resp) => resp.json())
            .then(({data}) => {
                console.log(data)
                if (data.contrasenia === password) {
                    login(
                        data.id,
                        data.correo,
                        data.nombre,
                        data.primer_apellido,
                        data.segundo_apellido,
                        data.fecha_nacimiento
                    );
                    navigate("/home", {
                        replace: true
                    })
                }
            })
            .catch((err) => console.log(err));
    }

    return{
        getLogin
    }
}