
export const getRestroList = () =>{
    const restroList =fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING").then((res)=>res.json()).
    then((res)=>res)
    return restroList
}