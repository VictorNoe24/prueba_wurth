import {useEffect, useState} from "react";

export const usePersonal = () => {

    const [personal, setPersonal] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [countPersonal, setContPersonal] = useState(false);

    const getPersonal = () => {
        fetch("http://localhost:8080/api/usuarios/", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => response.json())
            .then(({data}) => {
                setPersonal(data);
                setIsLoading(false);
                if (data.length <= 0 ){
                    setContPersonal(true);
                }
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getPersonal();
    },[])

    return {
        personal,
        isLoading,
        countPersonal,

    }
}