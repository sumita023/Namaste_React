import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Restaurantmenu = () => {
  const { menuId } = useParams();
  // const params=useParams();
  // const {menuId}=params;

  //custom hook to get all menus from a Restaurant
  const restaurant = useRestaurant(menuId);
  //redux
  const dispatch = useDispatch();
  const handleAddItems = () => {
    dispatch(addItem("grapes"));
  };
  const addFoodItem=(item)=>{
    dispatch(addItem(item));
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Restaurant id:{menuId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h2>{restaurant?.area}</h2>
        <h2>{restaurant?.city}</h2>
        <h2>{restaurant?.costForTwoMessage}</h2>
        <h2>{restaurant?.avgRating} stars</h2>
      </div>
      <button
        className="p-2 m-2 h-10 bg-green-200"
        onClick={() => handleAddItems()}
      >
        Add
      </button>
      <div>
        <h1 className="font-bold text-2xl">Menu</h1>
        {/* <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}
        <ul>
          {restaurant?.cuisines.map((item) => {
            return (
              <li key={item}>
                {item} - <button className="p-2 m-2 bg-green-300" onClick={()=>addFoodItem(item)}>Add</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Restaurantmenu;
