export const usePorfile = () => {

    const updatePorfile = (id, email, passwor, name, firtName, secontName, briday) => {
        fetch("http://localhost:8080/api/productos/", {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "id": id,
                "correo": email,
                "contrasenia": passwor,
                "nombre": name,
                "primer_apellido": firtName,
                "segundo_apellido": secontName,
                "fecha_nacimiento": briday
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if(data.statusCode === 200) {
                    window.location.reload()
                }
            })
            .catch((err) => console.log(err));
    }

    return {
        updatePorfile
    }
}