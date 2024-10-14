import React from 'react'
import { Skeleton } from 'primereact/skeleton';


const RestroListSkeletonLoader = () => {
  return (
    <div className='flex'>
        <Skeleton width="10rem" height="4rem"></Skeleton>
        <Skeleton className="mb-2"></Skeleton>
        <Skeleton width="10rem" className="mb-2"></Skeleton>
        <Skeleton width="5rem" className="mb-2"></Skeleton>
    </div>
  )
}

export default RestroListSkeletonLoader