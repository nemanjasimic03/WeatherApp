
let grad = document.querySelector(".grad");
let temp = document.querySelector(".temp");
let vetar = document.querySelector(".vetar");
let slika= document.querySelector(".slika");
let pritisak = document.querySelector(".pritisak");
let vlaznost = document.querySelector(".vlaznost");
let form = document.querySelector(".search");
let input = document.querySelector(".input");

let apiKey ="b8389f2f076f314b8f0d1a88e5b1a48b";

let city = "Belgrade";
form.addEventListener("submit", (e)=>{
   
    console.log(input.value);
    e.preventDefault();
    city=input.value;
    getData(city);
    input.value="";
    document.body.style.backgroundImage ="url('https://source.unsplash.com/1920x1080/?" + city + "')";
})

async function getData(city){

    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units=metric");
    const data = await response.json();
     console.log(data);
    //return data;
    grad.innerHTML="Weather in: " + data.name;
    temp.innerHTML=Math.round(data.main.temp)+" °C";
    vetar.innerHTML="Wind: " +data.wind.speed+" km/h";
    slika.src="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
    pritisak.innerHTML="Pressure: " +data.main.pressure + " mb"
    vlaznost.innerHTML="Humidity: "+data.main.humidity + "%";
}



