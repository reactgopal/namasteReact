import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, dummy }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
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
                <div className=" flex justify-center items-end-safe ">
                  <button className="absolute py-1 px-2 font-bold bg-white text-green-600 rounded-lg">
                    ADD +
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
