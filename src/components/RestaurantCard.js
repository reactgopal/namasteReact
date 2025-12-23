import { CDN_URL, LOGO_URL, RESTAURANT_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info || {};

  return (
    <div className="w-64 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition p-4 m-4">
      {cloudinaryImageId.toLowerCase().includes(".jpg") ||
      cloudinaryImageId.includes("e0839ff574213e6f35b3899ebf1fc597") ? (
        <img
          alt="restaurant-logo"
          className="w-full h-40 object-cover rounded-lg"
          src={CDN_URL + cloudinaryImageId}
        />
      ) : (
        <img
          alt="restaurant-logo"
          className="w-full h-40 object-cover rounded-lg"
          src={RESTAURANT_IMG}
        />
      )}

      <h3 className="font-semibold text-lg text-gray-800 mt-3 truncate">
        {name}
      </h3>
      <h4 className="text-sm text-gray-500 mt-1">{cuisines.join(", ")}</h4>
      <h4 className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 text-sm font-medium px-2 py-1 rounded-md">
        {avgRating}
      </h4>
      <h4 className="text-sm text-gray-600">{costForTwo}</h4>
      <h4 className="text-sm text-gray-600">{sla.deliveryTime} mins</h4>
    </div>
  );
};
export default RestaurantCard;
