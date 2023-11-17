import {Col, Container, Row, Spinner} from "react-bootstrap";
import {DontProducts} from "../compoment/products/DontProducts";
import {usePersonal} from "../hooks/usePersonal";
import {TablePersonal} from "../compoment/personal/TablePersonal";
export const PagePersonal = () => {

    const {countPersonal, personal, isLoading} = usePersonal();

    return(
        <Container fluid>
            <Row>
                {
                    isLoading && (
                        <div className="reload">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    )
                }
                {
                    countPersonal && (<DontProducts/>)
                }
                <Col sm={12}>
                    <TablePersonal
                        personals={personal}
                    />
                </Col>
            </Row>
        </Container>
    )
}

