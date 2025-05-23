import { useEffect, useState } from "react";



const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => { //using useEffect because we want to add the eventlistner just once

        window.addEventListener("offline" , () => {

            setOnlineStatus(false);
        });

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })

    } , [])

    return onlineStatus;
}

export default useOnlineStatus;