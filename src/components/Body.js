import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearcText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const { user,setMyUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
    console.log("useEffect");
  }, []);

  // console.log("render");
  async function getRestaurants() {
    var data = await fetch(
      "https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7008241&lng=88.3748212&page_type=DESKTOP_WEB_LISTING"
    );
    var json = await data.json();
    // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json?.data.cards[0].data.data.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    console.log(isOnline);
    return <h1>🔴sorry!!! no inetrnet connection. Please check it</h1>;
  }

  // if (filteredRestaurants?.length === 0) return <h1>No Restraurant Found</h1>;
  // if(!allRestaurants)
  // return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-2 bg-pink-50 m-2">
        <input
          type="text"
          className="search-input p-2 m-2 focus:bg-green-100 text-green-900 border-green-900"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearcText(e.target.value);
          }}
        />

        <button
          className="serach-btn p-2 m-2 bg-purple-500 text-white rounded-xl hover:bg-green-800"
          onClick={() => {
            //need to filter data
            //update the state -restaurants
            const data = filterData(allRestaurants, searchText);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) => 
            setMyUser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>
        <input
          value={user.email}
          onChange={(e) => 
            setMyUser({
              ...user,
              email: e.target.value,
            })
          }
        ></input>
      </div>
      <div className="restaurant-list flex flex-wrap">
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
