import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(restaurants, searchText) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  // console.log(filterData);
  return filterData;
}

const Body = () => {
  const [searchText, setSearcText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  console.log("useState" + useState());

  useEffect(() => {
    getRestaurants();
    console.log("useEffect");
  }, []);

  console.log("render");

  async function getRestaurants() {
    var data = await fetch(
      "https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7008241&lng=88.3748212&page_type=DESKTOP_WEB_LISTING"
    );
    var json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json);
  }

  // if (filteredRestaurants?.length === 0) return <h1>No Restraurant Found</h1>;
  // if(!allRestaurants)
  // return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearcText(e.target.value);
          }}
        />

        <button
          className="serach-btn"
          onClick={() => {
            //need to filter data
            //update the state -restaurants
            const data = filterData(allRestaurants, searchText);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.length > 0 &&
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })}
        {/* <RestaurantCard {...restaurantList[0].data}/>
        <RestaurantCard {...restaurantList[1].data}/>
        <RestaurantCard {...restaurantList[2].data}/>
        <RestaurantCard {...restaurantList[3].data}/>
        <RestaurantCard {...restaurantList[4].data}/> */}
      </div>
    </>
  );
};

export default Body;
