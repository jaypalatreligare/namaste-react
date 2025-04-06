import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; // ✅ Correct import
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/About"; // ✅ Ensure AboutUs is imported
import Contactus from "./components/Contactus";
import ErrorPage from "./components/Error";
import ProductDetail from "./components/ProductDetail";
import TabForm from "./components/TabForm/TabForm";
import OtpInput from "./components/OtpInput";
import NestedCheckbox from "./components/NestedCheckbox";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

// ✅ Define Routes Properly
 const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body />, // ✅ Ensure AboutUs exists
      },
      
      {
        path: "/about",
        element: <AboutUs />, // ✅ Ensure AboutUs exists
      },
      {
        path: "/contactus",
        element: <Contactus />
      },
      {
        path: "/product/:productId",
        element: <ProductDetail />
      },
      {
        path: "/tabform",
        element: <TabForm />
      },
      {
        path: "/otpinput",
        element: <OtpInput />
      },
      {
        path: "/nestedcheckbox",
        element: <NestedCheckbox />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery /></Suspense>
      },
    ],
    errorElement: <ErrorPage />
  },
  
]); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    { /* <AppLayout /> */ } {/* ✅ Correct way to use Router */}
    { <RouterProvider router={appRouter} /> } {/* ✅ Correct way to use Router */}
  </React.StrictMode>
);
