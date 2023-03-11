import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(restaurants, searchText) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  // console.log(filterData);
  return filterData;
}

const Body = () => {
  const [searchText, setSearcText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
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
            const data=filterData(restaurants, searchText);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
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
