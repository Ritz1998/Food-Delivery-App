// const heading = React.createElement('h1',{},"Hello there from far away!");
import React from "react"
import ReactDOM from "react-dom/client"
import '../index.css';
import Header from "./Components/Header/Header";
import Restaurants from "./Components/Restaurant/Restaurants";

const appLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Restaurants/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(appLayout())