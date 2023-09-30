const timeEl=document.getElementById('time');
const dateEl=document.getElementById('date');
const currentweatherItemEl= document.getElementById('current_weather_items');
const timezone=document.getElementById('time_zone');
const countryEl=document.getElementById('country');
const weatherforecastEl=document.getElementById('weather_forecast');
const cuurentTempEl= document.getElementById('current_temp');
const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months=['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec']



setInterval(() => {
    const time=new Date();
    const month=time.getMonth();
    const date=time.getDate();
    const day=time.getDay();
    const hour=time.getHours();
    const hoursIn12format =hour >=13?hour %12:hour 
    const minutes=time.getMinutes();
    const ampm=hour>=12 ?'pm':'am'

    timeEl.innerHTML=hoursIn12format+':'+minutes+ ''+ `<span id="am_pm">${ampm}</span>`
    dateEl.innerHTML= days[day]+','+ date+' ' + months[month]
}, 1000);
getWeatherData()
function getWeatherData()
{
    navigator.geolocation.getCurrentPosition((success)=>{
        console.log(success);


        let {latitude,logitude }=success.coords;
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res=>res.json()).then(data=>{
            console.log(data);
            showWeatherData(data);
        })

    })
    }
    function showWeatherData(data){

        let {humidity,pressure,sunrise,sunset,wind_speed}=data.current;
        currentweatherItemEl.innerHTML=
      ` <div class="weather_item">
      <div>humidity</div>
     <div>${humidity}</div>
 </div>
 <div class="weather_item">
     <div>Pressure</div>
     <div>${pressure}</div>
 </div>
 <div class="weather_item">
     <div>wind Speed</div>
     <div>${wind_speed}</div>
 </div>
      ` 
    }
