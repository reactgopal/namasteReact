import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
import { useLocation } from "react-router-dom";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  console.log(pathname, "response");
  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItems(item));
  };
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div
            key={`${item.card.info.id}_${index}`}
            className="p-2 m-2 border-gray-200 border-b-2 text-left"
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="font-bold">{item.card.info.name}</span>
                <span>₹ {item.card.info.price / 100}</span>
                <p className="text-xs">{item.card.info.description}</p>
              </div>
              <div>
                <img
                  className="w-30 rounded-lg text-center "
                  src={CDN_URL + item.card.info.imageId}
                  alt=""
                />
                {pathname !== "/cart" && (
                  <div className=" flex justify-center items-end-safe ">
                    <button
                      className="absolute py-1 px-2 font-bold bg-white text-green-600 rounded-lg"
                      onClick={() => handleAddItem(item)} // run on click
                      //onClick={handleAddItem(item)} // run on render
                      //onClick={handleAddItem} // no arguments
                    >
                      ADD +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
