import ResturantCard,{withPromotedLabel,withDiscountedRestaurant} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //contains all the list of the restaurants
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); // this is created to keep a copy of all the restaurants

  //whenever we need to filter out the restaurant or itirate through the restaurant we will use listOfRestaurants
  //and we will display the 


  const PromotedRestaurant = withPromotedLabel(ResturantCard);//Higher order component
  const DiscountedRestaurant = withDiscountedRestaurant(ResturantCard);

  //console.log(listOfRestaurants)
  
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //console.log(json);
    
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    //creating a copy of the list of all restaurant so that the original list keeps intact 
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    // setListOfRestaurants(restaurants);
    // setFilteredRestaurant(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  //conditional rendering - rendering on the basis of condition
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!!! Please check your internet connection.
      </h1>
    );
  }
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  // we can club this code with the below using ternary operator

  // return listOfRestaurants.length === 0 ? (
  //   <Shimmer />
  // ) : (
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search  p-4 m-4 ">
          <input
            type="text"
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn px-4 py-2 m-4 rounded-lg bg-blue-100"
            onClick={() => {
              //filter the restaurant card and update the ui
              //search text
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filtered);
            }}
          >
            search
          </button>
        </div>
        <div className= "filter-btn p-4 m-4 flex items-center">
        <button
          className="px-4 py-2  rounded-lg bg-gray-100"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
        
      </div>
      <div className="res-container flex flex-wrap">
        {
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.label ? <PromotedRestaurant resData={restaurant}/> : <ResturantCard resData={restaurant} /> }
              {restaurant.info.aggregatedDiscountInfoV3 ? <DiscountedRestaurant resData={restaurant}/> : <ResturantCard resData={restaurant} /> }
              
            </Link>
          )) //whenever yor are looping onto anything you have to
          //give a unique key here
        }
      </div>
    </div>
  );
};

export default Body;
