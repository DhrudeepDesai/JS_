import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    
    useEffect(() => {
        // Use uppercase currency code for API call
        const currencyCode = currency.toUpperCase();
        fetch(`https://api.exchangerate-api.com/v4/latest/${currencyCode}`)
        .then((res) => res.json())
        .then((res) => {
            // Transform the response and convert keys to lowercase
            const rates = res.rates || {};
            const normalizedRates = {};
            for (const [key, value] of Object.entries(rates)) {
                normalizedRates[key.toLowerCase()] = value;
            }
            setData(normalizedRates);
        })
        .catch((error) => {
            console.error('Error fetching currency data:', error);
            setData({});
        })
    }, [currency])
    
    return data;
}

export default useCurrencyInfo;