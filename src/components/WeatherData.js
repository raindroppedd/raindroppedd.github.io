import React from 'react'


const WeatherData = ({ data }) => {
  const { name, country, temp, id, main, description, temp_min, temp_max, icon, feels_like, speed, deg, humidity } = data;
  
  const playlist = [
    
    {
      'Thunderstorm': ['05hkyVmS70AVe95GEvt3Un', '6YAhehd4Z7s78KfKqenCg8'],
      'Drizzle': ['37i9dQZF1DX4sWSpwq3LiO', '37i9dQZF1DWV7EzJMK2FUI'],
      'Rain': ['5zxPaDEr4XtbvaZdUYN4FJ', '5g3o1dS5Rh2IfxVhxmPs4L'],
      'Snow': ['7lZs5r4oQV2nutddffLrg0', '4M07HWIlZr7zoXoxDHR5mz'],
      'Mist': ['65dGsaY3dHyV7ipkLKY8DN', '5kSUsy5FU3Wcxd4DBvXFm4'],
      'Smoke':['3hulEh4qbHpzWKQPVwzgMy', '37i9dQZF1DWTcqUzwhNmKv'],
      'Haze': ['37i9dQZF1DXcnkReojaCnV', '37i9dQZF1DWY4xHQp97fN6'],
      'Dust': ['37i9dQZF1DWXRqgorJj26U', '37i9dQZF1DWZryfp6NSvtz'],
      'Fog':['37i9dQZF1DWVw7c2MHvocy', '7fpzVWdsiJHvV7DuwZ81jR' ],
      'Sand':['4UiM5IjpEO4sOnxD9hork2', '37i9dQZF1DX83I5je4W4rP'],
      'Ash':['2QY8d6x5qQZxTCtyN7MWtR', '0bIXln11FhqlMHXudhCXZB'],
      'Squall':['011ehcZV5brKd9bQSBMzLM', '6ABA1ZmUK452hQFpOqINfQ'],
      'Tornado': ['56MhdyycM1uSjfZ3hdB5C0', '3R4y9c4iIrmrN3uwrTqRao'] ,
      'Clear': ['6gCC8kozvUlLGTzl2YO2MR', '37i9dQZF1DX1s9knjP51Oa'],
      'Clouds': ['3So47qlswBZpIERObnkMMG', '3oh3NmpgHy2leLcu7oobAr']
    }
    
  ];
  
    // WEATHER-SELECT ALGORITHM STARTS HERE
    if (main === 'Clear'){ // 1 CLEAR
      console.log("YES IT IS CLEAR");
      document.body.style.backgroundImage = "url('https://www.publicdomainpictures.net/pictures/30000/velka/sunny-day.jpg')";
      

    } else if (main === 'Clouds') { // 2 CLOUDS
      console.log("YES IT IS CLOUDY");
      document.body.style.backgroundImage = "url('https://www.publicdomainpictures.net/pictures/200000/velka/cloudy-sky-1474691616Oo9.jpg')";
  
    } else if (main === 'Thunderstorm') { // 3 THUNDERSTORM
      console.log("YES IT IS THUNDER");
      document.body.style.color = "white";
      document.body.style.backgroundImage = "url('https://www.publicdomainpictures.net/pictures/100000/velka/lightning-bolt.jpg')";
    
    } else if (main === 'Drizzle') { // 4 DRIZZLE
      console.log("YES IT IS DRIZZLE");
      document.body.style.color = "black";
      document.body.style.backgroundImage = "url('https://www.publicdomainpictures.net/pictures/70000/velka/background-with-rain.jpg')";
    
    } else if (main === 'Rain') { // 5 RAIN
      console.log("YES IT IS RAINING");
      document.body.style.color = "white";
      document.body.style.backgroundImage = "url('https://www.publicdomainpictures.net/pictures/30000/velka/rain-1340312240qO5.jpg')";
    
    } else if (main === 'Snow') { // 6 Snow
      console.log("YES IT IS SNOWING");
      document.body.style.color = "black";
      document.body.style.backgroundImage = "url('https://www.publicdomainpictures.net/pictures/30000/velka/winter-landscape-13527108010wC.jpg')";
    
    } else if (main === 'Ash') { // 7 Ash (ATMOSPHERE STARTS HERE)
      console.log("YES IT IS ASHY");
      document.body.style.color = "black";
      document.body.style.backgroundImage = "url('https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/IMG_1934.JPG')";
    
    } else if (main === 'Mist') { // 8 Mist
      console.log("YES IT IS MISTY");
      document.body.style.color = "black";
      document.body.style.backgroundImage = "url('https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/IMG_1934.JPG')";
    
    } else if (main === 'Smoke') { // 9 Smoke
      console.log("YES IT IS SMOKE");
      document.body.style.color = "black";
      document.body.style.backgroundImage = "url('https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/IMG_1934.JPG')";
    
    } else if (main === 'Haze') { // 10 Haze
      console.log("YES IT IS HAZE");
      document.body.style.color = "black";
      document.body.style.backgroundImage = "url('https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/IMG_1934.JPG')";
    
    } else if (main === 'Dust') { // 11 Dust
      console.log("YES IT IS DUST");
      document.body.style.color = "black";
      document.body.style.backgroundImage = "url('https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/IMG_1934.JPG')";
    
    } else if (main === 'Sand') { // 12 Sand
      console.log("YES IT IS SAND");
      document.body.style.color = "black";
      document.body.style.backgroundImage = "url('https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/IMG_1934.JPG')";
    
    } else if (main === 'Squall') { // 13 Squall
      console.log("YES IT IS SQUALL");
      document.body.style.color = "white";
      document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/1/15/Winslow_Homer_Summer_Squall.jpg')";
    
    } else if (main === 'Tornado') { // 14 Tornado
      console.log("YES IT IS TORNADO");
      document.body.style.color = "black";
      document.body.style.backgroundImage = "url('https://www.publicdomainpictures.net/pictures/180000/velka/tornado-funnel-cloud.jpg')";
    
    } else if (main === 'Fog') { // 15 Fog
      console.log("YES IT IS FOG");
      document.body.style.color = "black";
      document.body.style.backgroundImage = "url('https://www.publicdomainpictures.net/pictures/290000/velka/fog-1553265152e2l.jpg')";
    }
    // WEATHER-SELECT ALGORITHM ENDS HERE
  
  return (
    <>
      <main>

        <div className='weather-main'>
          <div> 
            <h1 className='description'>{description}</h1>
          </div>
        </div>
        <div>
          <h2 className='temperature'>{temp}°C</h2>
          <div className='info-sub'>
            <h1>feels like {feels_like} °C</h1>
            <h1>today's high {temp_max} °C</h1>
            <h1>today's low {temp_min} °C</h1>
            <h1>{name}, {country}</h1>
          </div>
          <div className='icon'>
          <img 
           src={`http://openweathermap.org/img/wn/${icon}@2x.png` }  width="125px" height="125px"/>
          </div>
        </div>

        <div class='newMove1'> 
          <iframe src={`https://open.spotify.com/embed/playlist/${playlist[0][main][1]}` } width="240" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div class='newMove2'> 
          <iframe src={`https://open.spotify.com/embed/playlist/${playlist[0][main][0]}` } width="240" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </main>
      
    </>
  );
}

export default WeatherData;