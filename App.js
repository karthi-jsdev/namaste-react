import React, { lazy, Suspense, useEffect, useState,useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import About from "./src/components/About";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import userContext from "./src/utils/userContext";
const Grocery = lazy(() => import("./src/components/Grocery"))
const AppLayout = () => {
  //authentication
  const [userName,setUserName] = useState();
  useEffect(()=>{
    const data = {
      name:"karthikeyan m"
    }
    setUserName(data.name);
  },[])

  return (
    <userContext.Provider value={{loggedInUser:userName,setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {

        path: "/contact",
        element: <Contact />
      },
      {
        path: "/RestaurantMenu/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element: <Suspense fallback="Loading ..."><Grocery /></Suspense>
      }
    ],
    errorElement: <Error />
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
