import {RestaurantContext} from '../../providers/RestaurantProvider';
import {useContext} from 'react';
import {Card, CardDeck, Container} from 'react-bootstrap';
import {Tst, Tl, Img, HomeImgCont} from '../shared/StyledComponents';
import { Link } from "react-router-dom";
const FavoriteList = ({restaurants}) =>{
    // const {restaurants} = useContext(RestaurantContext)
    console.log(restaurants)
    return(
        <>
        {restaurants.filter((r) => r.favorite).map((r) => (
        <Tst style={{width:"15rem"}} >
            <Tl>
            <Card.Body>
            <>
            <Card.Img variant="top" src={r.image} />
            <Card.Title>
                <Link to={`/restaurants/${r.id}/menus`}>{r.name}</Link>
            </Card.Title>
            <Card.Text>{r.description}</Card.Text>
            
            </>
            </Card.Body>
            </Tl>
        </Tst>

        ))}
            
       
        </>
    )
}
export default FavoriteList;