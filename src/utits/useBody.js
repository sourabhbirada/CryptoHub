import { useEffect, useState } from "react";
import { API_KEY } from "./content";


const useBody = () => {

    const [coindata , setcoindata] = useState([]);

    const fetchdata = async () => {
        const data = await fetch(API_KEY);
        const response = await data.json();
        console.log(response.Data);
        setcoindata(response.Data)
      };

      useEffect(() => {
        fetchdata();
    } , []);

    return  coindata;

}


export default useBody;