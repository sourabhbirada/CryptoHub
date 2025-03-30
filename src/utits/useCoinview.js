import { useEffect, useState } from "react";
import { COIN_API_KEY } from "./content";
const API= 'CG-wSym8XLWp8MrPpzsS39YKsMu'

const useCoinview = (coinid) => {
  const [coindata, setCoinData] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
        try {
          const response = await fetch(`${COIN_API_KEY}${coinid}?api_key=${API}`);
          console.log(response)
          if (!response.ok) {
            throw new Error(`Failed to fetch coin data for ${coinid}`);
          }
          const data = await response.json();
          console.log(data);
          
          setCoinData(data);
        } catch (error) {
          console.error("Error fetching coin data:", error);
        }
      };
      
    if (coinid) {
      fetchdata();
    }
  }, [coinid]);

  return coindata;
};

export default useCoinview;
