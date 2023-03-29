import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant"

const Restaurantmenu = () => {
  const { menuId } = useParams();
  // const params=useParams();
  // const {menuId}=params;

//custom hook
  const restaurant=useRestaurant(menuId);

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
