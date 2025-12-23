import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const restaurantData = resInfo?.cards?.[2]?.card?.card?.info;
  const { name, cuisines } = restaurantData || {};
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards, "data.data");

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-6 my-6">
      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
        {name}
      </h1>
      <p className="text-sm text-gray-500 mt-1 mb-4">{cuisines.join(", ")}</p>
      <ul className="grid grid-cols-1 gap-3 divide-y divide-gray-100">
        {itemCards.map((item) => (
          <li
            key={item.card.info.id}
            className="py-3 flex items-center justify-between gap-4"
          >
            <div className="flex-1">
              <p className="text-md font-medium text-gray-800 truncate">
                {item.card.info.name}
              </p>
            </div>

            <div className="ml-4 text-right">
              <span className="text-sm text-gray-600">
                ₹{item.card.info.price / 100 || "N/A"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
