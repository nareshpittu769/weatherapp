var api = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='
var apikey = '500a94113acb0a60da2e480e6329d500'

var searchbtn = document.querySelector('.search-btn')
var cityname = document.querySelector('#search')
async function findTemp(city){


    let res = await fetch(api+city+`&appid=${apikey}`)
    if(res.status == 404){
        alert('Invalid city')
    }
    else{
        let data = await res.json()
        let img = await fetch(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        // console.log(img.url);
        let image = document.querySelector('.temp-img img')
        // image.src = img.url
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+'°C';
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity h3').innerHTML = data.main.humidity+'%';
        document.querySelector('.wind h3').innerHTML = (data.wind.speed)+' Km/h';

        if(data.weather[0].main == 'Clouds'){
            image.src = "images/clouds.png"
        }
        else if(data.weather[0].main == 'Clear'){
            image.src = "images/clear.png"
        }
        else if(data.weather[0].main == 'Drizzle'){
            image.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == 'Mist'){
            image.src = "images/mist.png"
        }
        else if(data.weather[0].main == 'Rain'){
            image.src = "images/rain.png"
        }
        else if(data.weather[0].main == 'Snow'){
            image.src = "images/snow.png"
        }
        else if(data.weather[0].main == 'Wind'){
            image.src = "images/wind.png"
        }

        document.querySelector('.temp-detailes-box').style.display = 'block';
    }
    
    

}

searchbtn.addEventListener("click",()=>{
    findTemp(cityname.value)
})