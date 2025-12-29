import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info || {};

  const { loggedInUser } = useContext(UserContext);
  

  return (
    <div className="w-64 bg-white rounded-2xl shadow-md hover:shadow-xl transform   transition p-4 m-4">
      <img
        alt="restaurant-logo"
        className="w-full h-40 object-cover rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-semibold text-lg text-gray-800 mt-3 truncate">
        {name}
      </h3>
      <h4 className="text-sm text-gray-500 mt-1">{cuisines.join(", ")}</h4>
      <h4 className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 text-sm font-medium px-2 py-1 rounded-md">
        {avgRating}
      </h4>
      <h4 className="text-sm text-gray-600">{costForTwo}</h4>
      <h4 className="text-sm text-gray-600">{sla.deliveryTime} mins</h4>
      <h4 className="text-lg font-bold">User: {loggedInUser}</h4>
    </div>
  );
};

export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
