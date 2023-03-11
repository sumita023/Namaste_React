
import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({name, cloudinaryImageId,cuisines,avgRating}) => {
    console.log(name);
   
     return (
      <div className="card">
        <img alt="img" src={IMG_CDN_URL+cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} stars</h4>
      </div>
    );
  };
  export default RestaurantCard;