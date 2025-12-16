import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const res = await fetch(`${MENU_API}${resId}`);
    const json = await res.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const restaurantData = resInfo?.cards?.[2]?.card?.card?.info;
  const { name, cuisines } = restaurantData || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards, "data.data");

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹{item.card.info.price / 100 || "N/A"}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
