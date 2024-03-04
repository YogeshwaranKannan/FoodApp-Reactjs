 import React from "react";
 import ReactDOM  from "react-dom/client";
 import {HeadingComponent}  from "./Components/Title";
 import Body from "./Components/Body";
 import Footer from "./Components/Footer";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";

 const AppLayout = function(){
    return(
        <Provider store ={appStore}>
         <>
        <HeadingComponent/>
        <Outlet/>
        <Footer/>
        </>
        </Provider>
    );
 };

 const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/About",
                element:<About/>,
            },
            {
                path:"/Contact",
                element:<Contact/>,
            },
            {
                path:"/Restaurant/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path: "/Cart",
                element: <Cart/>,
            },
            
        ],
    },
    
 ]);
 
 const root = ReactDOM.createRoot(document.getElementById("title"));
 root.render(<RouterProvider router={appRouter}/>); 