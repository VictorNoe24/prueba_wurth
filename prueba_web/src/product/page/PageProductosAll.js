import {Col, Container, Row, Spinner} from "react-bootstrap";
import {useProducts} from "../hooks/useProducts";
import {DontProducts} from "../compoment/products/DontProducts";
import {TableProducts} from "../compoment/products/TableProducts";
import {ModalCreateProduct} from "../compoment/products/ModalCreateProduct";

export const PageProductosAll = () => {

    const {products ,countProducts,isLoading} = useProducts();

    return (
        <Container fluid className="containerPage">
            <Row style={{padding: 5}}>
                <Col className="text-end">
                    <ModalCreateProduct/>
                </Col>
            </Row>
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
                    countProducts && (<DontProducts/>)
                }
                <Col sm={12}>
                    <TableProducts
                        products={products}
                    />
                </Col>
            </Row>
        </Container>
    )
}