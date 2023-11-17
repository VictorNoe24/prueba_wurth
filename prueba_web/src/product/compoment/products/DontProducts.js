import {Col, Container, Image, Row} from "react-bootstrap";
import imageProduct from "../../img/Wavy_Med-10_Single-03.jpg"
export const DontProducts = () => {
    return (
        <Container>
            <Row className="cardDontProductCenter">
                <Col>
                    <Image src={imageProduct} style={{width: "300px", height: "auto"}}/>
                    <h5>Lo sentimos</h5>
                    <p>{`Lamentablemente no se ha encontrado ningun`}</p>
                    <p>{`resultado de la busqueda que quiere realizar`}</p>
                </Col>
            </Row>
        </Container>
    )

}