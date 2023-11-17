import {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useLogin} from "../hooks/useLogin";

export const FormLogin = () => {

    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const { getLogin } = useLogin();
    const writeEmail = ({target}) => {
        setEmail(target.value)
    }

    const writePassword = ({target}) => {
        setPassword(target.value)
    }

    const getUser = async (event) => {
        event.preventDefault()
        getLogin(email, password)
    }

    return (
        <Container fluid>
            <Row className="centerForm">
                <Col sm={12} xl={6}>
                    <Form onSubmit={getUser}>
                        <p className="textLogin">Inicar sesion</p>
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
                                type="password"
                                id="contraseña"
                                placeholder="Ingresar contraseña"
                                onChange={event => writePassword(event)}/>
                        </Form.Group>
                        <Link to="/">
                        </Link>
                        <div className="d-grid text-center">
                            <Button variant="primary" type="submit" size="lg">
                                Iniciar sesion
                            </Button>
                            <Link to="/register" className="nav-link">
                                ¿No tienes cuenta?
                            </Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}