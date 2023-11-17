import { Col, Container, Row, Table } from "react-bootstrap";

export const TableCategory = ({category}) => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>nombre</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                category.map((cate) => (
                                    <tr key={cate.id}>
                                        <td>{cate.id}</td>
                                        <td>{cate.nombre}</td>
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