import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";

// const ItemList = ({ items }) => {
//   console.log(items);
//   return (
//     <div>
//       {items.map((item) => (
//         <div key={item.card.info.id}>
//           <div className="border-b border-b-black text-left py-2 w-9/12">

//             <span>{item.card.info.name} </span>
//             <span className="px-2">
//               {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }
//             </span>
//             <p className="text-xs">{item.card.info.description}</p>
//           </div>
//           <div className="food-img w-3/12 p-4 flex">
//             <img  className="w-full " src={CDN_URL + item.card.info.imageId }/>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };


const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const isItemInCart = (itemId) => {
    return cartItems.some((cartItem) => cartItem.card.info.id === itemId);
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => {
        const inCart = isItemInCart(item.card.info.id);

        return (
          <div
            key={item.card.info.id}
            className="p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-between items-start"
          >
            {/* Item Details */}
            <div className="w-3/4">
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.card.info.name}
                </h3>
                <span className="text-sm font-medium text-gray-600">
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-snug">
                {item.card.info.description}
              </p>
            </div>

            {/* Item Image and Add/Remove Button */}
            <div className="w-1/4 flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-lg object-cover mb-3"
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
              />
              <div className="flex items-center gap-2">
                {inCart ? (
                  <button
                    className="px-4 py-2 bg-red-500 text-white font-semibold text-sm rounded-lg hover:bg-red-600 active:scale-95 transition-all duration-200"
                    onClick={() => handleRemoveItem(item)}
                  >
                    -
                  </button>
                ) : null}
                <button
                  className={`px-4 py-2 ${
                    inCart
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-orange-500 hover:bg-orange-600"
                  } text-white font-semibold text-sm rounded-lg active:scale-95 transition-all duration-200`}
                  onClick={() => handleAddItem(item)}
                >
                  {inCart ? "+" : "Add +"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;


