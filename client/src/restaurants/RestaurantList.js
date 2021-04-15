import Restaurant from "./Restaurant";

const RestaurantList = ({ restaurants, deleteRestaurant, updateRestaurant }) => {
  return (
      <>
          {restaurants.map((r) => (
            <>
              <Restaurant
                key={r.id}
                {...r}
                deleteRestaurant={deleteRestaurant}
                updateRestaurant={updateRestaurant}
              />
              <br></br>
            </>
          ))}
       
      </>
   
  );
};

export default RestaurantList;
