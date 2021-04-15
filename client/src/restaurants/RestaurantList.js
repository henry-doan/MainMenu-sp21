import Restaurant from "./Restaurant";
import { Container, Row, Col } from "react-bootstrap";

const RestaurantList = ({ restaurants, deleteRestaurant, updateRestaurant }) => {
  return (
    <>
      {restaurants.map((r) => (
        <>
          <Container fluid>
            <Row>
              <Col>
                <Restaurant
                  key={r.id}
                  {...r}
                  deleteRestaurant={deleteRestaurant}
                  updateRestaurant={updateRestaurant}
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

export default RestaurantList;
