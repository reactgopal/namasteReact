import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const itemList = useSelector((store) => store.cart.items);
  // const store = useSelector((store) => store);
  // const Cartitems = store.cart.items;

  const handleClearCart = () => {
    dispatch(clearItems());
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-6 my-6">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {itemList.length === 0 ? <h1>plz Add some items to card</h1> : ""}
      <ItemList items={itemList} />
    </div>
  );
};
export default Cart;
