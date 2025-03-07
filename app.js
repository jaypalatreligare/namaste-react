import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // ✅ Correct import
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/About"; // ✅ Ensure AboutUs is imported
import Contactus from "./components/Contactus";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

// ✅ Define Routes Properly
 const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <AboutUs />, // ✅ Ensure AboutUs exists
  },
  {
    path: "/contactus",
    element: <Contactus />
  }
]); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    { /* <AppLayout /> */ } {/* ✅ Correct way to use Router */}
    { <RouterProvider router={appRouter} /> } {/* ✅ Correct way to use Router */}
  </React.StrictMode>
);
