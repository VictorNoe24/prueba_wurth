import {Col, Container, Row, Table} from "react-bootstrap";

export const TablePersonal = ({personals}) => {
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
                                <th>Apellidos</th>
                                <th>Correo</th>
                                <th>Fecha-nacimiento</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                personals.map((personal) => (
                                    <tr key={personal.id}>
                                        <td>{1}</td>
                                        <td>{personal.nombre}</td>
                                        <td>{personal.primer_apellido} {personal.segundo_apellido}</td>
                                        <td>{personal.correo}</td>
                                        <td>{personal.fecha_nacimiento}</td>
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