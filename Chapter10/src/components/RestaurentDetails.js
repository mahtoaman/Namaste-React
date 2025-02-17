import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";
import "./RestaurantDetails.css"; // Import the CSS file

const RestaurantDetails = () => {
  const { restId } = useParams();

  const [restaurantData, setRestaurantData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${restId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch restaurant data");
      }

      const json = await response.json();
      setRestaurantData(json);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  // Safely access menu items
  const menuItems =
    restaurantData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards?.[2]?.card?.card?.categories?.[0]?.itemCards;

  return (
    <div className="restarantDetails">
      <div className="restarantDetails__header">
        <h1>Restaurant Details ID: {restId}</h1>
        <img
          src={
            IMG_CDN_URL +
            restaurantData?.data?.cards?.[2]?.card?.card?.info
              ?.cloudinaryImageId
          }
          alt="Restaurant"
        />
        <h2>
          Name: {restaurantData?.data?.cards?.[2]?.card?.card?.info?.name}
        </h2>
        <h2>
          City: {restaurantData?.data?.cards?.[2]?.card?.card?.info?.city}
        </h2>
        <h2>
          Average Rating:{" "}
          {restaurantData?.data?.cards?.[2]?.card?.card?.info?.avgRating}
        </h2>
      </div>
      <div className="menu">
        <h2>Menu</h2>
        <ul>
          {menuItems && menuItems.length > 0 ? (
            menuItems.map((item, index) => (
              <li key={index}>{item.card.info.name}</li>
            ))
          ) : (
            <p>No menu items available</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
