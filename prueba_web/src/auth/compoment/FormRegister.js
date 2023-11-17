import {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

export const FormRegister = () => {

    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ name, setName ] = useState();
    const [ lastnameFirt, setLastnameFirt ] = useState();
    const [ lastnameSecont, setLastnameSecont ] = useState();
    const [ briday, setBriday ] = useState();
    const navigate = useNavigate()

    const writeEmail = ({target}) => {
        setEmail(target.value)
    }

    const writePassword = ({target}) => {
        setPassword(target.value)
    }

    const writeFirtLastName = ({target}) => {
        setLastnameFirt(target.value)
    }
    const writeSecontLastName = ({target}) => {
        setLastnameSecont(target.value)
    }

    const writeName = ({target}) => {
        setName(target.value)
    }

    const writeBriday = ({target}) => {
        setBriday(target.value)
        console.log(target.value)
    }
    
    const getLogin = (event) => {
        event.preventDefault()
        fetch("http://localhost:8080/api/usuarios/", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                "correo": email,
                "contrasenia": password,
                "nombre": name,
                "primer_apellido": lastnameFirt,
                "segundo_apellido": lastnameSecont,
                "fecha_nacimiento": briday
            })
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.statusCode !== 200) {
                    alert(data.message)
                } else {
                    navigate("/", {
                        replace: true
                    })
                }
            })
            .catch((err) => console.log(err));
    }

    return (
        <Container fluid>
            <Row className="centerForm">
                <Col sm={12} xl={6}>
                    <Form onSubmit={event => getLogin(event)}>
                        <p className="textLogin">Registrar usuario</p>
                        <Form.Group className="mb-4">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                id="name"
                                placeholder="Ingresar nombre"
                                onChange={ event => writeName(event) }
                            />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label>Primer Apellido</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                id="firtLastname"
                                placeholder="Ingresar primer apellido"
                                onChange={ event => writeFirtLastName(event) }
                            />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label>Segundo Apellido</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                id="secondLastname"
                                placeholder="Ingresar segundo apellido"
                                onChange={ event => writeSecontLastName(event) }
                            />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label>Fecha de nacimineto</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                id="briday"
                                placeholder="Ingresar correo"
                                onChange={ event => writeBriday(event) }
                            />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                id="correo"
                                placeholder="Ingresar correo"
                                onChange={ event => writeEmail(event) }
                            />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                required
                                minLength="6"
                                maxLength="45"
                                type="password"
                                id="contraseña"
                                placeholder="Ingresar contraseña"
                                onChange={event => writePassword(event)}/>
                        </Form.Group>
                        <Link to="/">
                        </Link>
                        <div className="d-grid text-center">
                            <Button variant="primary" type="submit" size="lg">
                                Registrarse
                            </Button>
                            <Link to="/login" className="nav-link">
                                ¿Ya tienes cuenta?
                            </Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}