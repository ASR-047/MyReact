import { useEffect, useState } from "react"
import { Menu_API } from "../utils/constants";

//this is the custom hook which fetches the data for RestaurantMenu
const useRestaurantMenu =(resId)=>{

    const [resInfo, setresInfo] = useState(null);

useEffect(() => {
    fetchData();
},[]);

const fetchData = async() => {
    
    const data= await fetch(Menu_API + resId);

    const json= await data.json();
    
    setresInfo(json.data);
}
 

return resInfo;



}


export default useRestaurantMenu;