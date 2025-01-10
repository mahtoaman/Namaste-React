import { IMG_CDN_URL } from "./constants";

const RestaurentCard = ({
  name,
  cloudinaryImageId,
  areaName,
  cuisines,
  avgRating,
  id
}) => {
  return (
    <div className="card" >
      <h3>{name}</h3>
      <img
        src={
        IMG_CDN_URL +
          cloudinaryImageId
        }
        alt="img"
      />
      <h3>{cuisines ? cuisines.join(", ") : ""}</h3>
      <h4>{areaName ? areaName : ""}</h4>
      <h4>{avgRating ? avgRating : ""} Stars</h4>
    </div>
  );
};


export default RestaurentCard;