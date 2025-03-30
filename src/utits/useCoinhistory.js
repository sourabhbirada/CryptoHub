import { useEffect, useState } from "react";
import { COIN_HISTORY } from "./content";



const useCoinhistory = (coinid) => {

    const [coinhistory , setcoinhistory] = useState("");


    useEffect(() => {

        const fetchdata = async () => {
            const response = await fetch(COIN_HISTORY);
            const data = await response.json()
            setcoinhistory(data);
        }

        fetchdata();
    } , [coinid])

    return coinhistory;
}




export default useCoinhistory;