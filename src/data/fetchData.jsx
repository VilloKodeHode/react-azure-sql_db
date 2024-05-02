import { useState,useEffect } from "react"


export default function ShowData() {
    const [data, setData] = useState([])
    const apikey = import.meta.env.VITE_WEATHER_API_KEY
    const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=London&aqi=no`

    useEffect(() => {
        async function fetchData() {

            try {
                const response = await fetch(url, {
                    
                })

                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.statusText}`)
                }
                const json = await response.json()
                setData(json)
            }

            catch (error) {
                console.log(error.message)
            }

        }
        fetchData()
    },[])
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}