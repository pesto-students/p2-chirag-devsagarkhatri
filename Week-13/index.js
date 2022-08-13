const express= require('express');
const app = express();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cors = require('cors');
const { json } = require('express');
const corsOptions = {
    origin:'*',
    credentials:true,
    optionSuccessStatus:200,
    contentType:'application/json',
}
app.use(cors(corsOptions));

const getCityUrl = "https://api.weatherapi.com/v1/current.json?"
const getForecastUrl = "https://api.weatherapi.com/v1/forecast.json?"
const KEY = "key=c0e71adfb0cb42b680b94617220708";
//https://api.weatherapi.com/v1/current.json?key=c0e71adfb0cb42b680b94617220708&q=delhi

const getCityData = async (city) => {        
    const url = getCityUrl+KEY+'&q='+city;
    let result = await fetch(url).then((res)=>res.json()).then((json)=>{return json;});
    return await result;
}

const getCitiesData = async(arr)=>{
    let result = [];
    for(let i=0;i<arr.length;i++){
        result.push(await getCityData(arr[i]));
    }
    return result;
}

const getCityForecast=async(city,days)=>{
    const url = getForecastUrl+KEY+'&q='+city;
    let result = await fetch(url).then((res)=>res.json()).then((json)=>{return json;}); 
    return await result;
}

app.get("/getCity", async (req, res) => {    
    res.send(getCityData(req.query.q));
});

app.get("/getCities", async (req, res) => {

    let arr=req.query.q?req.query.q.split(','):[];
    let pageSize = 2;
    let page = req.query.p?req.query.p:undefined;
    let result = await getCitiesData(arr);

    console.log(req.query.q +result+'\n result of all cities'+page);
    if(page!==undefined){
        let resultPaginated = result.slice((page-1)*pageSize,page*pageSize);
        res.send(resultPaginated);
    }
    res.send(result);
});


app.get("/getForecast", async (req, res) => {
    const result = []
    const cities = req.query.q.split(',');
    const days = req.query.d;

    for(let i =0;i<cities.length;i++) {
        result.push(await getCityForecast(cities[i], days));        
    }
    console.log(req.query.q +result+'\n result of all forcast');
    res.send(result);
});

app.listen(3001, () => {
    console.log("Server running on port 3001 "+ KEY);
    getCityData();
});
