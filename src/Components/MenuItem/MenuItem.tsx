import React from 'react';
import "./MenuItem.css"
import { menuImageUrl } from '../../Constants/Constants.ts';

const MenuItem = ({ item }) => {
  const { name, imageId, price, ratings, description } = item?.card?.info;

  return (
    <div className="menu-item">
      <img src={menuImageUrl + imageId} alt={name} className="menu-item-image" />
      <div className="menu-item-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="menu-item-info">
          <span className="menu-item-price">₹{price/100}</span>
          <span className="menu-item-rating">⭐ {ratings?.aggregatedRating?.rating}</span>
        </div>
        <button className="add-btn">Add</button>
      </div>
    </div>
  );
};

export default MenuItem;
