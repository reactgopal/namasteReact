import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  // props drilling
  const dummy = "Dummy Data";

  if (resInfo === null) {
    return <Shimmer />;
  }

  const restaurantData = resInfo?.cards?.[2]?.card?.card?.info;
  const { name, cuisines } = restaurantData || {};

  const Categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (cards) =>
        cards?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-6 my-6">
      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
        {name}
      </h1>
      <p className="text-sm text-gray-500 mt-1 mb-4">{cuisines.join(", ")}</p>
      {/* categories  Accordions */}
      {Categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          // showItems={index == showIndex && true}
          // setShowIndex={() => setShowIndex(index)}
          // showItems={index === showIndex}
          showItems={index == showIndex}
          setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
