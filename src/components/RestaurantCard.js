
import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({name, cloudinaryImageId,cuisines,avgRating,user}) => {
  
     return (
      <div className="card w-56 p-2 m-5 shadow-lg bg-pink-50">
        <img alt="img" src={IMG_CDN_URL+cloudinaryImageId} />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} stars</h4>
        <h5>{user.name}</h5>
      </div>
    );
  };
  export default RestaurantCard;