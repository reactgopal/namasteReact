import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { setUserName, loggedInUser } = useContext(UserContext);

  //Whenever state variable update, react triggers a reconciliation cycle (re-render the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await res.json();

    // optional chaining
    setListOfRestaurant(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRestaurant(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (onlineStatus == false) {
    return <h1>check your internet connection </h1>;
  }
  return (
    <div className="body">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-r from-pink-50 to-violet-50 rounded-2xl shadow-sm mx-2 sm:mx-4 my-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 flex-1">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="w-full sm:flex-1 px-4 py-2 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm sm:text-base"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold rounded-lg hover:opacity-90 transition text-sm sm:text-base"
            onClick={() => {
              const filterData = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filterData, "filterData");
              setFilterRestaurant(filterData);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 flex-1">
          <h3 className="font-bold text-xl">UserName :</h3>
          <input
            type="text"
            placeholder="LoggedIn user name to modify..."
            className="w-full sm:flex-1 px-4 py-2 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm sm:text-base"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <button
          className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-white border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-pink-50 transition text-sm sm:text-base"
          onClick={() => {
            const filterDataLists = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilterRestaurant(filterDataLists);
          }}
        >
          ⭐ Top Rated
        </button>
      </div>
      <div className="restaurant-container flex flex-wrap justify-center">
        {filterRestaurant.map((restaurant, index) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            {/* if the restaurant is promoted then add promoted label to it  */}
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
