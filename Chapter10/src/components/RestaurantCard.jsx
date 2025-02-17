import { IMG_CDN_URL } from "./constants";
import "./RestaurentCard.css";

const RestaurentCard = ({
  name,
  cloudinaryImageId,
  areaName,
  cuisines,
  avgRating,
  id,
}) => {
  return (
    <div className="restaurant-card">
      <h3>{name}</h3>
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="restaurant" />
      <div className="restaurant-info">
        <h3>{cuisines ? cuisines.join(", ") : ""}</h3>
        <h4>{areaName ? areaName : ""}</h4>
        <h4>{avgRating ? avgRating : ""} Stars</h4>
      </div>
    </div>
  );
};

export default RestaurentCard;
