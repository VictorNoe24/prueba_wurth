import {Col, Container, Row} from "react-bootstrap";
import {FormPorfile} from "../compoment/home/FormPorfile";

export const PagePorfile = () => {
    return (
        <Container className="containerPage">
            <Row className="cardDontProductCenter">
                <Col sm={12}>
                    <FormPorfile/>
                </Col>
            </Row>
        </Container>
    )
}