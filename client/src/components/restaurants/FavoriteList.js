import {Card, CardDeck, Container} from 'react-bootstrap';
import {Tst, Tl, LinkColor} from '../shared/StyledComponents';
const FavoriteList = ({restaurants}) =>{
    // const {restaurants} = useContext(RestaurantContext)
    console.log(restaurants)
    return(
        <>
        <Container>
        <CardDeck>
        {restaurants.filter((r) => r.favorite).map((r) => (
        <Tst style={{width:"15rem"}} >
            <Card.Img variant="top" src={r.image} />
            <Tl>
            <Card.Body>
            <>
            <Card.Title>
                <LinkColor to={`/restaurants/${r.id}/menus`}>{r.name}</LinkColor>
            </Card.Title>
            <Card.Text>{r.description}</Card.Text>
            
            </>
            </Card.Body>
            </Tl>
        </Tst>

        ))}
            
       </CardDeck>
        </Container>
        </>
    )
}
export default FavoriteList;