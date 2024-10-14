import React from 'react'
import './RestroCards.css'
import { imageBaseUrl } from '../../Constants/Constants'

const RestroCards = ({resData}:any) => {
  
  const { name = '', cloudinaryImageId = '', avgRating = '', sla = '', cuisines = [] } = resData?.info || {}
  return (
    <div className='restroCard-container' key={resData?.info?.id}>
        <img className='restroFood-img' src={imageBaseUrl + cloudinaryImageId}/>
        <div className='restroNameContainer'>
        <h3>{name}</h3>
        </div>
        <div className='cuisinesContainer'>
        <h4>{cuisines?.join(", ")}</h4>
        </div>
        <h4>{avgRating+"Stars"}</h4>
        <h4>{sla?.slaString}</h4>
    </div>
  )
}

export default RestroCards