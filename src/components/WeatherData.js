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
      'Clouds': ['30mwGMKDu1EGjsvCwp9Tbp', '2nGtsAdLUZRnru8GkDF0uk']
    }
    
  ];
  
  if (main === 'Clouds'){
    console.log(playlist[0].Haze);
  }
  return (
    <>
      <main>
        <div className='weather-main'>
          <div>
            <h1>{name}, {country}</h1>
            <h2 className='description'>{description}</h2>
            <h3>{id}</h3>
            <h4>{main}</h4>
          </div>
        </div>
        <div className='temp-main'>
          <h1>Feels like {feels_like} °C</h1>
          <h2 className='temperature'>{temp}°</h2>
          
            <h3>Today's High {temp_max}°</h3>
            <h3>Today's Low {temp_min}°</h3>
            <h4>{icon}</h4> 
            <h5>{speed}</h5>
            <h6>{deg}</h6>
          
        </div>
        <div>
          <h4>Humidity: {humidity} %</h4>
        </div>
      </main>
      
    </>
  );
}

export default WeatherData;