import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; //useParams is used to read the resID that we have created in the dynamic path

import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";

import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams(); //extracting resId from useParams hook, const param = useParams();conosle.log(param) to see why resId is used
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

 /* const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; */

  //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories = //here we are filtering out all the categories like recomended, combos, thali etc 
  //@ is not valid that is why we are writing it like [@type]
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(categories);

  return (
    <div className="menuContainer text-center">
      <h1 className="font-bold text-lg my-4">{name}</h1>

      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      {/* here we are building the accordions which is collapsable & the index comes from map function*/}
      {categories.map((category,index) => (
        
        //passing the props to MenuCategory
        <MenuCategory
          data={category?.card?.card}
          key={category?.card?.card.title}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)} //passing the function setShowIndex as props to the MenuCategory component
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
