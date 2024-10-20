// const heading = React.createElement('h1',{},"Hello there from far away!");
import React from "react"
import ReactDOM from "react-dom/client"
import '../index.css';
import Header from "./Components/Header/Header";
import Restaurants from "./Components/Restaurant/Restaurants";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import RestroMenu from "./Components/RestroMenu/RestroMenu";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Restaurants />
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/contactUs",
                element: <ContactUs />
            },
            {
                path: "/restaurants/:resId",
                element: <RestroMenu />
            },
        ],
    }


])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)