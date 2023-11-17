import {useEffect, useState} from "react";

export const useProducts = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [countProducts, setContProcuts] = useState(false);

    const deleteProduct = (user_id) => {
        fetch("http://localhost:8080/api/productos/", {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "id": user_id
            })
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.statusCode === 200){
                    window.location.reload();
                }
            })
            .catch((err) => console.log(err));
    }
    const addProduct = (name, price, stock, category_id, user_id) => {
        fetch("http://localhost:8080/api/productos/", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "nombre": name,
                "precio": price,
                "existencias": stock,
                "categoria": {
                    "id": category_id
                },
                "fecha_registro": new Date().toLocaleString(),
                "usuario": {
                    "id": user_id
                }
            })
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.statusCode === 200) {
                    window.location.reload();
                }
            })
            .catch((err) => console.log(err));
    }

    const updateProduct = (id, name, price, stock, date, category_id, user_id) => {
        fetch("http://localhost:8080/api/productos/", {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "id": id,
                "nombre": name,
                "precio": price,
                "existencias": stock,
                "categoria_id": {
                    "id": category_id
                },
                "fecha_registro": date,
                "usuario_registro": {
                    "id": user_id
                }
            })
        })
            .then((response) => response.json())
            .then((data) => {
                if(data.statusCode === 200) {
                    window.location.reload()
                }
            })
            .catch((err) => console.log(err));
    }

    const getProducts = () => {
        fetch("http://localhost:8080/api/productos/", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => response.json())
            .then(({data}) => {
                setProducts(data);
                setIsLoading(false);
                if (data.length <= 0 ){
                    setContProcuts(true);
                }
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getProducts();
    },[])

    return {
        products,
        isLoading,
        countProducts,
        deleteProduct,
        updateProduct,
        addProduct
    }
}