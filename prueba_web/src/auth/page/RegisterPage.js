import {Col, Container, Row} from "react-bootstrap";
import {InfoLogin} from "../compoment/InfoLogin";
import {FormRegister} from "../compoment/FormRegister";

export const RegisterPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm={6} style={{background: "#16a6e5", height: "100vh"}}>
                    <InfoLogin/>
                </Col>
                <Col sm={6} style={{background: "#ffffff", height: "100vh"}}>
                    <FormRegister/>
                </Col>
            </Row>
        </Container>
    )
}