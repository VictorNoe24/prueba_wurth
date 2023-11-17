import {useEffect, useState} from "react";

export const useCategory = () => {

    const [category, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [countCategory, setContCategory] = useState(false);

    const addCategory = (name) => {
        fetch("http://localhost:8080/api/categorias/", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "nombre": name
            })
        })
            .then((response) => response.json())
            .then((data) => {
                if(data.statusCode === 200){
                    window.location.reload();
                }
            })
            .catch((err) => console.log(err));
    }

    const getCategory = () => {
        fetch("http://localhost:8080/api/categorias/", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => response.json())
            .then(({data}) => {
                setCategory(data);
                setIsLoading(false);
                if (data.length <= 0 ){
                    setContCategory(true);
                }
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getCategory();
    },[])

    return {
        category,
        isLoading,
        countCategory,
        addCategory,
        getCategory
    }
}