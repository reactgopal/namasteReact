import { useEffect, useState } from "react";

import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  // const [showItems, setShowItems] = useState(false);
  
  const handleClick = () => {
    setShowIndex();
    // setShowItems(!showItems);
  };

  return (
    <div>
      <div className=" p-4 mx-auto my-4 shadow-lg bg-gray-50">
        {/* Header */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* accordion Body */}
        {showItems && <ItemList items={data.itemCards}  dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
