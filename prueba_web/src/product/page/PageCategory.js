import {Col, Container, Row, Spinner} from "react-bootstrap";
import {DontProducts} from "../compoment/products/DontProducts";
import {useCategory} from "../hooks/useCategory";
import {TableCategory} from "../compoment/categoria/TableCategory";
import {ModalCreateCategory} from "../compoment/categoria/ModalCreateCategory";

export const PageCategory = () => {

    const {countCategory,category,isLoading} = useCategory();

    return(
        <Container fluid>
          <Row>
            <Col style={{padding: 5}} className="text-end">
              <ModalCreateCategory/>
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
                countCategory && (<DontProducts/>)
            }
            <Col sm={12}>
              <TableCategory
                  category={category}
              />
            </Col>
          </Row>
        </Container>
    )
}