import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import appStore from "../utils/AppStore";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  //subscribing to the store using selector
const cartItems = useSelector((store) => store.cart.items)

  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="header-container flex justify-between bg-green-100 shadow-lg sm:bg-yellow-100 lg:bg-violet-300">
      <div className="logo-container">
        <img className="w-60" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-5">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            
          <Link to="/cart"> Cart ({cartItems.length})</Link></li>
          <button
            className=" px-4 border max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4"> User : {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
