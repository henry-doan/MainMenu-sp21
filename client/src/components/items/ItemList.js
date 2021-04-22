import Item from "./Item";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemList = ({
  items,
  deleteItem,
  updateItem,
}) => {
  return (
    <>
      {items.map((i) => (
        <>
          <Container fluid>
            <Row>
              <Col>
                <Link to={`/items/${i.id}`}>
                  <Item
                    key={i.id}
                    {...i}
                    deleteItem={deleteItem}
                    updateItem={updateItem}
                  />
                </Link>
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
