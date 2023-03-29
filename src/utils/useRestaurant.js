
import {useState, useEffect} from "react";
import {FETCH_MENU_URL} from "../constant"; 

const useRestaurant=(menuId)=>{
const [restaurant, setRestaurant]=useState(null);
useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    var data= await fetch(FETCH_MENU_URL+menuId +"&submitAction=ENTER");
    //var data= await fetch("https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/v4/full?lat=22.7008241&lng=88.3748212&menuId="+menuId);
    var json = await data.json();
    setRestaurant(json.data.cards[0].card.card.info);
    console.log(json.data.cards[0].card.card.info.cuisines);
  }

  return restaurant;
}


export default useRestaurant;