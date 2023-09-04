var api = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bengaluru'
var apikey = '500a94113acb0a60da2e480e6329d500'

async function findTemp(){
    let res = await fetch(api+`&appid=${apikey}`)
    let data = await res.json()
    let img = await fetch(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    // console.log(img.url);
    document.querySelector('.temp-img img').src = img.url
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+'°C';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity h3').innerHTML = data.main.humidity;
}
findTemp()