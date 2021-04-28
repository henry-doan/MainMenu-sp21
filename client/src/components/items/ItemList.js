import Item from "./Item";
import { Container, Row, Col } from "react-bootstrap";


const ItemList = ({ items, deleteItem, updateItem }) => {
  return (
    <>
      {items.map((i) => (
        <>
          <Container fluid>
            <Row>
              <Col>
                <Item
                  key={i.id}
                  {...i}
                  deleteItem={deleteItem}
                  updateItem={updateItem}
                />
              </Col>
            </Row>
          </Container>
          <br></br>
        </>
      ))}
    </>
  );
};

export default ItemList;
