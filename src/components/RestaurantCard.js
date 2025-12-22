import { CDN_URL, LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info || {};

  return (
    <div className="restaurant-card">
      {cloudinaryImageId.toLowerCase().includes(".jpg") ||
      cloudinaryImageId.includes("e0839ff574213e6f35b3899ebf1fc597") ? (
        <img alt="restaurant-logo" src={CDN_URL + cloudinaryImageId} />
      ) : (
        <img alt="restaurant-logo" src={LOGO_URL} />
      )}

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};
export default RestaurantCard;
