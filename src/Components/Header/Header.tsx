import React from "react"
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import "./Header.css"

const Header = () =>{
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'About Us',
            icon: 'pi pi-star'
        },
        {
            label: 'Contact Us',
            icon: 'pi pi-star'
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