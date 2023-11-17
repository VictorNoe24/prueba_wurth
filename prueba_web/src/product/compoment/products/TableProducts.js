import {Button, Col, Container, Row, Table} from "react-bootstrap";
import {useProducts} from "../../hooks/useProducts";
import {ModalUpdateProduct} from "./ModalUpdateProduct";

export const TableProducts = ({products}) => {
    const {deleteProduct} = useProducts()

    const drop = (id) => {
        deleteProduct(id)
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Existencias</th>
                                <th>Categoria</th>
                                <th>Fecha-registro</th>
                                <th>Usuario</th>
                                <th>Aciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                products.map((product) => (
                                    <tr key={product.id}>
                                        <td>{1}</td>
                                        <td>{product.nombre}</td>
                                        <td>{product.precio}</td>
                                        <td>{product.existencias}</td>
                                        <td>{product.categoria?.nombre}</td>
                                        <td>{product.fecha_registro}</td>
                                        <td>{product.usuario?.nombre}</td>
                                        <td className="text-center">
                                            <Button className="btn-danger" onClick={()=>drop(product.id)}>Eliminar</Button>
                                            <ModalUpdateProduct
                                                id = {product.id}
                                                names = {product.nombre}
                                                prices = {product.precio}
                                                stock = {product.existencias}
                                                date = {product.fecha_registro}
                                                id_category = {product.categoria?.nombre}
                                                id_user = {product.usuario?.nombre}
                                            />
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}