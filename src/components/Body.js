import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  //Whenever state variable update, react triggers a reconciliation cycle (re-render the component)
  console.log(filterRestaurant, "filterRestaurant");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await res.json();
    // optional chaining
    setListOfRestaurant(
      json?.data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRestaurant(
      json?.data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btn-search"
            onClick={() => {
              const filterData = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurant(filterData);
            }}
          >
            Search
          </button>
        </div>
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
        {filterRestaurant.map((restaurant, index) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
