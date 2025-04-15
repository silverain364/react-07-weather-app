import axios from "axios";

const API_KEY = '8f1c59595f8c099ec73eb709cd5a09a8'

//위도, 경도 받아오기
//async 나중에 정리하기...
export const fetchWeatherByCoords = async(lat, lon) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params:{
            lat,
            lon,
            units:'metric',
            lang:'kr',
            appid:API_KEY
        }
    })
    return res.data
}