import RestaurentCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { restaurentList } from "./constants";
import { useState, useEffect } from "react";

// Body Component
const Body = () => {
  const [searchInput, setSearchInput] = useState(""); 
  const [restaurants, setRestaurants] = useState(restaurentList); 
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurentList); 

  function filterData(searchTxt, restaurants) {
    return restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
  }

  useEffect(() => {
    getRestaurants();
  }, []); 

  async function getRestaurants() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch restaurants: ${response.statusText}`);
      }

      const data = await response.json();
      const fetchedRestaurants =
        data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.map(
          (restaurant) => restaurant.info
        );
console.log(fetchedRestaurants)
      setRestaurants(fetchedRestaurants);
      setFilteredRestaurants(fetchedRestaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }

if(!restaurants)return null;
if(filteredRestaurants?.length===0) return <h1>No Restaurants found</h1>


  // Render component
  return restaurants.length===0?(<Shimmer/>) :(
    <>
      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filterData(searchInput, restaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      {/* Restaurant list */}
      <div className="restaurent-list">
        {filteredRestaurants.map((restaurant) => (
          <RestaurentCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </>
  );
};

export default Body;
