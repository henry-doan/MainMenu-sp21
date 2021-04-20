import Restaurant from './Restaurant'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const RestaurantList = ({
  restaurants,
  deleteRestaurant,
  updateRestaurant,
}) => {
  return (
    <>
      {restaurants.map((r) => (
        <>
        
          <Container fluid>
            <Row>
              <Col>
                <Link to={`/restaurants/${r.id}`}>
                  <Restaurant
                    key={r.id}
                    {...r}
                    deleteRestaurant={deleteRestaurant}
                    updateRestaurant={updateRestaurant}
                  />
                </Link>
              </Col>
            </Row>
          </Container>
          <br></br>
        </>
      ))}
    </>
  )
}

export default RestaurantList
