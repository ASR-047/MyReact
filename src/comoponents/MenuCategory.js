import { useState } from "react";
import ItemList from "./ItemList";

//Receiving the props from RestaurantMenu data, showItems and setShotIndex (lifting the state up)

//This is a controlled component means it doesn't control its own state but its parent control its state
const MenuCategory = ({ data, showItems,setShowIndex }) => {
  //console.log(data);
 
  //const [showItem, setShowItem] = useState(false);

  const handleClick = () => {

    //setShowItem(!showItem)
        setShowIndex();
  }
  return (

    
    <div>
      {/*header*/}
      <div className="w-6/12 mx-auto my-4 bg-gray-200 border-gray-400 border-b shadow-lg rounded-md py-4  hover:cursor-pointer hover:scale-105  hover:bg-gray-400 transition-transform duration-300 ease-in-out">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="px-1 font-bold">
            {data.title} ({data.itemCards.length}){" "}
          </span>
          <span className="px-2">⬇️</span>
        </div>
        {/* For accordian body we have created a separate component that is <ItemList>*/}
        {showItems && <ItemList items={data.itemCards} />} {/*here I am passing props to the ItemList component*/}
      </div>
    </div>
  );
};

export default MenuCategory;
