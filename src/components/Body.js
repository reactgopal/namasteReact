import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
// not using key (not acceptable) <<<<< index as key  <<<<<<<< unique id as key (best practice)
const Body = () => {
  // State variable - Super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filterDataLists = listOfRestaurant.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestaurant(filterDataLists);
          }}
        >
          Top Rated Restaurants{" "}
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
