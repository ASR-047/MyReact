import React from "react";
import ReactDom from "react-dom/client";

import Header from "./comoponents/Header";
import Body from "./comoponents/Body";








const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(heading); this is how we render react Element not functional conponent

root.render(<AppLayout />); // this is how we render functional component
