
export const getRestroList = () =>{
    const restroList =fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING").then((res)=>res.json()).
    then((res)=>res)
    return restroList
}
export const getRestroMenus = (restroId) => {
    const restroMenus =fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+ restroId + "&catalog_qa=undefined&submitAction=ENTER").then((res)=>res.json()).
        then((res)=>res)
        return restroMenus
}