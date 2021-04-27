import {RestaurantContext} from '../../providers/RestaurantProvider';
import {useContext} from 'react';
import {Card, CardDeck, Container} from 'react-bootstrap';
import {Tst, Tl, Img} from '../shared/StyledComponents';

const FavoriteList = ({restaurants}) =>{
    // const {restaurants} = useContext(RestaurantContext)
    console.log(restaurants)
    return(
        <Container>
        <CardDeck>
        <Tst>
            <Tl>
            <Card.Body>
        {restaurants.filter((r) => r.favorite).map((r) => (
            <>
            <Card.Img variant="top" src={r.image} />
            <Card.Title>
                <Card.Text>
                {r.name}
                </Card.Text>
            </Card.Title>
            <Card.Text>{r.description}</Card.Text>
            
            </>

        ))}
            
            </Card.Body>
            </Tl>
        </Tst>
        </CardDeck>
        </Container>
    )
}
export default FavoriteList;