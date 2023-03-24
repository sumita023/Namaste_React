import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";

const Restaurantmenu = () => {
  const { menuId } = useParams();
  // const params=useParams();
  // const {menuId}=params;
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    var data= await fetch("https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7008241&lng=88.3748212&restaurantId="+menuId +"&submitAction=ENTER");
    //var data= await fetch("https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/v4/full?lat=22.7008241&lng=88.3748212&menuId="+menuId);
    var json = await data.json();
    setRestaurant(json.data.cards[0].card.card.info);
    console.log(json.data.cards[0].card.card.info.cuisines);
  }
  return !restaurant? <Shimmer/> : (
    <div className="menu">
      <div>
        <h1>Restaurant id:{menuId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h2>{restaurant?.area}</h2>
        <h2>{restaurant?.city}</h2>
        <h2>{restaurant?.costForTwoMessage}</h2>
        <h2>{restaurant?.avgRating} stars</h2>
      </div>
      <div>
        <h1>Menu</h1>
        {/* <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}
        <ul>
         { restaurant?.cuisines.map((item)=>{
           return <li key={item}>{item}</li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default Restaurantmenu;
