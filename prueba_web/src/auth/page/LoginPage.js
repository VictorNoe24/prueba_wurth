import {Col, Container, Row} from "react-bootstrap";
import "../css/login.css"
import {InfoLogin} from "../compoment/InfoLogin";
import {FormLogin} from "../compoment/FormLogin";

export const LoginPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm={6} style={{background: "#16a6e5", height: "100vh"}}>
                    <InfoLogin/>
                </Col>
                <Col sm={6} style={{background: "#ffffff", height: "100vh"}}>
                    <FormLogin/>
                </Col>
            </Row>
        </Container>
    )
}