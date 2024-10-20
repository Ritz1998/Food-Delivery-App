import React from "react"
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import "./Header.css"
import { Link, NavLink } from "react-router-dom";
const Header = () =>{
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            template: () => (
                <NavLink
                 to="/"className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}>
                    <i className="pi pi-home" style={{ marginRight: 4 }}></i>
                    Home
                </NavLink>
            )
        },
        {
            label: 'About Us',
            icon: 'pi pi-star',
            template: () => (
                <NavLink to="/about" className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}>
                    <i className="pi pi-star" style={{ marginRight: 4 }}></i>
                    About Us
                </NavLink>
            )
            
        },
        {
            label: 'Contact Us',
            icon: 'pi pi-star',
            template: () => (
                <NavLink to="/contactUs" className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}>
                    <i className="pi pi-star" style={{ marginRight: 4 }}></i>
                    Contact Us
                </NavLink>
            )
        },
    ]
    const start = (
        <img 
            className="logo" 
            alt="logo" 
            src="https://img.freepik.com/premium-vector/food-delivery-logo-design-template-restaurant-logo_556845-430.jpg" 
            style={{ width: '100px', height: 'auto' }} 
        />
    );
    return(
        <div className="header">
        <div className="header-content">
            <div className="logo-container">{start}</div>
            <div className="menu-container">
                    <Menubar model={items}  className="menu"/>
                    <Button 
                        // icon="pi pi-shopping-cart" 
                        className="cart-button" 
                        label="Cart"
                        onClick={() => console.log('Cart Clicked')}
                    />
            </div>
        </div>
    </div>
    )
}
export default Header