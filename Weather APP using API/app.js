const wForm = document.querySelector(".wform");
const card= document.querySelector(".card");
const apikey= "";



wForm.addEventListener("submit",async event=> {
    event.preventDefault();
    const getCity = document.querySelector(".cityInput").value.toLowerCase();
    if(!getCity){
        console.error("Please enter a city");
        displayError("Refresh and enter a valid city from the USA");
        return;
    }

    const myUrl=`https://api.openweathermap.org/data/2.5/weather?q=${getCity}&appid=${apikey}`;

   try{
    const response= await fetch(myUrl);
    if(!response.ok){
        throw new Error("Refresh and enter a valid city");
    }

    const data= await response.json();
    weatherInfo(data);

   }
   catch(e){
    console.error(e);
    displayError(e);
    
   }

    
    
})



function weatherInfo(data){
    card.style.display= "flex";
    const cityDisplay=document.querySelector(".cityDisplay");
    cityDisplay.textContent=data.name;
    const tempDisplay= document.querySelector(".tempDisplay");
    tempDisplay.textContent=kf(data.main.temp)+"\u00B0F";
    const humidityDisplay= document.querySelector(".humidityDisplay");
    humidityDisplay.textContent=`Humidity: ${data.main.humidity}%`;
    const descDisplay= document.querySelector(".descDisplay");
    descDisplay.textContent=data.weather[0].description;
    const weatherEmoji= document.querySelector(".weatherEmoji");
    weatherEmoji.textContent=emojilol(data.weather[0].id);
    document.querySelector(".errorDisplay").textContent="";
    
}

function displayError(message){

const myError = document.createElement("p");
myError.classList.add("errorDisplay");
myError.textContent=message;
card.textContent="";
card.style.display="flex";
card.appendChild(myError);

}

function kf(k) {
  return ((k - 273.15) * 9/5 + 32).toFixed(2);
}


function emojilol(wid){

    switch(true){
        case (wid>= 200 && wid<300):
            return "⛈️";
        case (wid>= 300 && wid<400):
            return "🌦️";
        case (wid>= 500 && wid<600):
            return "🌧️";  
        case (wid>= 600 && wid<700):
            return "❄️";
        case (wid>= 700 && wid<800):
            return "🌫️";        
        case (wid=== 800):
            return "☀️";   
        case (wid >= 801 && wid <810):
            return "☁️";    
        default:
            return "❓";
    }
}
