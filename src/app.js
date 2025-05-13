import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDom from "react-dom/client";

import Header from "./comoponents/Header";
import Body from "./comoponents/Body";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./comoponents/ContactUs";

import Error from "./comoponents/Error";
import RestaurantMenu from "./comoponents/RestaurantMenu";
import Shimmer from "./comoponents/Shimmer";

import UserContext from "./utils/UserContext";
import appStore from "./utils/AppStore";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";

import Cart from "./comoponents/Cart";


//import Grocery from "./comoponents/Grocery";
const Grocery = lazy(() => import("./comoponents/Grocery"));

//import AboutUs from "./comoponents/AboutUs";
const AboutUs = lazy(() => import("./comoponents/AboutUs"));

const AppLayout = () => {

const [userName,setUserName]=useState();

useEffect(() => {
  //make an api call and send username and password

  const data = {
    name : "Ankit Kumar"
  }
  setUserName(data.name)
},[])

//in the below code <Outlet> is provided be react which we import from react-router-dom
//this outlet will be filled with child routes so that the header keeps intact and the outlet will be replaced with the children 
// routes based on the path 
  return (
    <Provider store ={appStore}> {/* providing the store to the app and passing the store as props*/}
    <UserContext.Provider value={{loggedInUser : userName}}> {/*UserContext.Provideris used to provide the context to the whole
    app the loggedInUser value will not be default value and here i am changing the default value of loggedInUser based on the
     above code in useEffect*/}
    <div className="app">
      <Header />
      <Outlet /> 
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(heading); this is how we render react Element not functional conponent
//root.render(<AppLayout />); // this is how we render functional component

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [                       //children routes are created to keep the header intact or fixed 
      {                               //so that id doesn't change ever after going to a different page
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading.....</h1>}><AboutUs /></Suspense>,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer></Shimmer>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId", //to make a path dynamic we use : eg. "/pathname/:resId" ,here resId will be dynamic
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
