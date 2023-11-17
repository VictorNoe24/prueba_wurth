import {Button, Form, Modal} from "react-bootstrap";
import {useContext, useState} from "react";
import {useProducts} from "../../hooks/useProducts";
import {useCategory} from "../../hooks/useCategory";
import {AuthContext} from "../../../auth/context/AuthContext";

export const ModalCreateProduct = () => {

    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [precio, setPrice] = useState();
    const [existencias, setExistencias] = useState();

    const {addProduct} = useProducts()
    const {category} = useCategory()
    const {user} = useContext( AuthContext )
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
        let cate = document.getElementById("drop").value
        addProduct(name, precio, existencias, cate, user?.id);
    }

    return(
        <>
            <Button variant="primary" onClick={handleShow}>
                Añadir producto
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
                                    onChange={ event => writeName(event) }
                                />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label>Ingresa precio</Form.Label>
                                <Form.Control
                                    required
                                    type="numeric"
                                    placeholder="Ingresa precio"
                                    onChange={ event => writePrice(event) }
                                />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label>Ingresa existencias</Form.Label>
                                <Form.Control
                                    required
                                    type="numeric"
                                    placeholder="Ingresa existencias"
                                    onChange={ event => writeExistens(event) }
                                />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label>Categoria</Form.Label>
                                <Form.Select aria-label="Default select example" id="drop">
                                    <option>Elige una categoria</option>
                                    {category.map((cate) => (
                                        <option key={cate?.id} value={cate?.id}>{cate?.nombre}</option>
                                    ))}
                                </Form.Select>
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