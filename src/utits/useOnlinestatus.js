import { useEffect, useState } from "react";


const useOnlinestatus = () =>{

    const [status , setstatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline" , (event) => {
            setstatus(false);
        })
    } , [])

    return status;
}


export default useOnlinestatus;