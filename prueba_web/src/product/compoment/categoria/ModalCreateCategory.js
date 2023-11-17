import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {useCategory} from "../../hooks/useCategory";

export const ModalCreateCategory = () => {

    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const { addCategory } = useCategory();
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    const writeName = ({target}) => {
        setName(target.value)
    }

    const insertCategory = () => {
        addCategory(name);
        handleClose()
    }

    return(
        <>
            <Button variant="primary" onClick={handleShow}>
                Añadir categoria
            </Button>
                <Modal
                    show={show}
                    onHide={handleClose}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Agregar categoria</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-4">
                                <Form.Label>Ingresa el nombre de la categoria</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    id="correo"
                                    placeholder="Ingresa nombre"
                                    onChange={ event => writeName(event) }
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit" onClick={insertCategory}>
                            Guardar producto
                        </Button>
                    </Modal.Footer>
                </Modal>
        </>
    )
}