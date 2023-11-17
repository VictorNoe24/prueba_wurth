import {Button, Form} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";
import {usePorfile} from "../../hooks/usePorfile";

export const FormPorfile = () => {

    const { user } = useContext( AuthContext );
    const [name, setName] = useState();
    const [firtLastName, setFirtLastName] = useState();
    const [secontLastName, setSecontLastName] = useState();
    const [briday, setBriday] = useState();
    const [status, setStatus] = useState(false);

    const {updatePorfile} = usePorfile();
    const update = (event) => {
        event.defaultPrevented()
        updatePorfile(user?.id, user?.email, user?.password, name, firtLastName, secontLastName, briday)

    }
    const writeName = ({target}) => {
        setName(target.value)
        setStatus(true)
    }

    const writeOneLastName = ({target}) => {
        setName(target.value)
        setStatus(true)
    }

    const writeTwoLastName = ({target}) => {
        setName(target.value)
        setStatus(true)
    }

    const writeBriday = ({target}) => {
        setName(target.value)
        setStatus(true)
    }

    useEffect(()=> {
        setName(user?.name)
        setFirtLastName(user?.firtLastName)
        setSecontLastName(user?.secontLastName)
        setBriday(user?.briday)
    },[])

    return(
        <Form onSubmit={update}>
            <p className="textLogin">Informacion personal</p>
            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresa nombre" defaultValue={user?.name} onChange={(event) => writeName(event)} />
            </Form.Group>
            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label>Primer apellido</Form.Label>
                <Form.Control type="text" placeholder="Ingresa primer apellido" defaultValue={user?.firtLastName} onChange={(event) => writeOneLastName(event)}/>
            </Form.Group>
            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label>Segundo apellido</Form.Label>
                <Form.Control type="text" placeholder="Ingresa segundo apellido" defaultValue={user?.secontLastName} onChange={(event) => writeTwoLastName(event)}/>
            </Form.Group>
            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label>Fecha de nacimineto</Form.Label>
                <Form.Control type="date" placeholder="Enter email" defaultValue={user?.briday} onChange={(event) => writeBriday(event)}/>
            </Form.Group>
            <Button  type="submit" size="lg" style={{width: "100%"}} disabled={!status}>Actualizar</Button>
        </Form>
    )
}