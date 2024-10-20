import React, { useEffect, useState } from 'react'
import { getRestroMenus } from '../../Api/Apiservices.js'
import MenuItem from '../MenuItem/MenuItem.js'
import './RestroMenu.css'
import { useParams } from 'react-router-dom'
const RestroMenu = () => {
    const [RestaurantMenus, setRestaurantMenus] = useState<any>({}) 
    const {resId} = useParams()
    useEffect(() => {
        fetchRestroMenus()
    }, [])

    const fetchRestroMenus = async() =>{
        const restroMenus = await getRestroMenus(resId)
        console.log("restroMENUS",restroMenus)
        setRestaurantMenus(restroMenus?.data)
    }
    
    return (
        <div className='container'>
             <div className="restaurant-info">
                <h1>{RestaurantMenus?.cards?.[2]?.card?.card?.info.name}</h1>
                <h3>{RestaurantMenus?.cards?.[2]?.card?.card?.info.cuisines?.join(', ')}</h3>
                <h3>{RestaurantMenus?.cards?.[2]?.card?.card?.info.costForTwoMessage}</h3>
            </div>

            {/* Menu Section */}
            <div className='menuItem-wrapper'>
            <h1 className="menu-header">Menu</h1>
            {
              RestaurantMenus?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((item:any)=>{
               return <MenuItem key={item?.card?.info?.id} item = {item}/>
              })
            }
            </div>
        </div>  
    )
}

export default RestroMenu