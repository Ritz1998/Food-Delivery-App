import React, { useEffect, useState } from 'react'
import RestroCards from '../RestroCards/RestroCards'
import './Restaurants.css'
import { restaurantData } from './Restro'
import { getRestroList } from '../../Api/Apiservices'
import RestroListSkeletonLoader from '../SkeletonLoading/RestroListSkeletonLoader'
import { Skeleton } from 'primereact/skeleton'
import { InputText } from "primereact/inputtext";
import { Link, useNavigate } from 'react-router-dom'


const Restaurants = () => {
  const [restro, setRestro] = useState<any>([])
  const [searchRestro, setSearchRestro] = useState([])
  const [isFilterSelected, setIsFilterSelected] = useState(false)
  const [searchTxt, setSearchTxt] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    getAllRestro()
  }, [])

  const search = (text: string) => {
    console.log("TEXTTT BEF", text)
    setSearchTxt(text)

    if (text != '') {
      console.log("TEXTTT", text)
      const searchedRestros = restro?.filter((item) =>{
        if(item?.info?.name?.toLowerCase().includes(text)){
          return item
        }
    })
    console.log("SERCHED",searchedRestros)
      setSearchRestro(searchedRestros)
    } else {
      console.log("FROM ELSE BLOCK")
      setSearchRestro(restro)
    }
  }

  const getAllRestro = async () => {
    const restros = await getRestroList()
    console.log("restros-->", restros)
    if (restros) {
      console.log("restroooo", restros?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setRestro(restros?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setSearchRestro(restros?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
  }
  const onFilterApplied = () => {
    setIsFilterSelected(!isFilterSelected)
    const getTopRatedRestro = restro.filter((item) => {
      return item?.info?.avgRating >= 4.5
    })
    console.log("FILTEREED", getTopRatedRestro)
    setSearchRestro(getTopRatedRestro)
  }


  return (
    <div className='container restroMainWrapper'>
      {/* {restro?.length == 0 ? <RestroListSke
      letonLoader /> : null} */}
      <div className='filter-wrapper'>
      <div className="card flex justify-content-center">
        <InputText value={searchTxt} onChange={(e) => search(e.target.value)} className='' />
      </div>
        <button className={isFilterSelected ? "filter-selected" : 'filter-btn'} onClick={onFilterApplied}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {searchRestro?.map((item: any) => {
          return <div 
           key={item?.info?.id}
           onClick={() => navigate(`/restaurants/${item?.info?.id}`)} 
           style={{ cursor: 'pointer' }} // optional to make it look like a clickable item
         >
           <RestroCards resData={item} />
        </div>
        })}
      </div>

    </div>
  )
}

export default Restaurants