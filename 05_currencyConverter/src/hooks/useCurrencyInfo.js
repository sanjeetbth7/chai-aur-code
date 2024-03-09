//Custom hooks designing

import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    // Currrecy rate api
    let url = `https://open.er-api.com/v6/latest/${currency}`
    useEffect(() => {
        fetch(url).then((res)=> res.json()).then((res)=> setData(res["rates"]))
    },[currency])
    // console.log(data)
    return data;
}

export default useCurrencyInfo;