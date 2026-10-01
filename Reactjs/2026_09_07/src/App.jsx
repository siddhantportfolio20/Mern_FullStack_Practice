import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./slice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const itemsArray = useSelector((state) => state.cart.item);
  const addedItems = useSelector((state) => state.cart.addedItem);

  return (
    <div>


      <h1 className="text-3xl font-bold">
        Products
      </h1>

      {itemsArray.map((item) => (
        <div key={item.id} >

          <h2 >
            {item.product_name}
          </h2>

          <p>Price: ₹{item.price}</p>

          <button
            onClick={() => dispatch(add(item.id))}
            
          >
            Add
          </button>

        </div>
      ))}


      {/* ADDED ITEMS */}
      <h1 >
        Cart
      </h1>

      {addedItems.map((item) => (
        <div key={item.id}>

          <h2 className="text-xl font-bold">
            {item.product_name}
          </h2>

          <p>Price: ₹{item.price}</p>

          <button
            onClick={() => dispatch(remove(item.id))}
        
          >
            Remove
          </button>

        </div>
      ))}

    </div>
  );
};

export default Cart;