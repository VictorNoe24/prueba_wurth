import {Button, Form, Modal} from "react-bootstrap";
import {useProducts} from "../../hooks/useProducts";
import {useEffect, useState} from "react";

export const ModalUpdateProduct = ({id, names, prices, stock, date, id_category, id_user}) => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [precio, setPrice] = useState();
    const [existencias, setExistencias] = useState();

    const {updateProduct} = useProducts()
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    const writeName = ({target}) => {
        setName(target.value)
    }

    const writePrice = ({target}) => {
        setPrice(target.value)
    }

    const writeExistens = ({target}) => {
        setExistencias(target.value)
    }

    const insert = () => {
        updateProduct(id, name, precio, existencias, date, id_category, id_user);
        handleClose()
    }

    useEffect(()=>{
        setName(names);
        setPrice(prices)
        setExistencias(stock)
    },[])

    return(
        <>
            <Button variant="primary" onClick={handleShow}>
                Actualizar
            </Button>
            <Form>
                <Modal
                    show={show}
                    onHide={handleClose}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Agregar producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-4">
                                <Form.Label>Ingresa el nombre del producto</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Ingresa nombre"
                                    defaultValue={names}
                                    onChange={ event => writeName(event) }
                                />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label>Ingresa precio</Form.Label>
                                <Form.Control
                                    required
                                    type="numeric"
                                    placeholder="Ingresa precio"
                                    defaultValue={prices}
                                    onChange={ event => writePrice(event) }
                                />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label>Ingresa existencias</Form.Label>
                                <Form.Control
                                    required
                                    type="numeric"
                                    placeholder="Ingresa existencias"
                                    defaultValue={stock}
                                    onChange={ event => writeExistens(event) }
                                />
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={insert}>
                            Guardar producto
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </>
    )
}