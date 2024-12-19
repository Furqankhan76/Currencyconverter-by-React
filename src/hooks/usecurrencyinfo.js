import { useEffect, useState } from "react";

function usecurrencyinfo(currency){
     const [data, setdata] = useState({});
    useEffect(() => {
            fetch(
              `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
            ).then((res) => {
              // console.log(res);

              res.json().then((res) => {
                // console.log(res);

                setdata(res[currency]);
              });
            });
            
    }, [currency])

    console.log(data);
    
    return data
    
}

export default usecurrencyinfo