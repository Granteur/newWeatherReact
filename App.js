import React from 'react';

import './App.css';

import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './appComponent/weather.component';
import Form from './appComponent/form.component';


const apiKey = {
  key: "62715d8105c316b2c19f1b51a01dd879",
  baseurl: "https://api.openweathermap.org/data/2.5/weather?q=",
};

/*function getResults(query) {
  fetch(`${apiKey.baseurl}weather?zip=${query}&units=imperial&APPID=${apiKey.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}*/

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      weatherIcon: undefined,
      main: undefined,
      tempF: undefined,
      tempMax: undefined,
      tempMin: undefined,
      description: "",
      error: false
    };
    this.getWeather();

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Snow:"wi-snow",
      Rain:"wi-storm-showers",
      Clear:"wi-day-sunny",
      Cloudy:"wi-day-fog",
      Atmosphere: "wi-fog"
    }
  }

  getWeatherIcon(icons, rangeId){
    switch (true){
      case rangeId >= 200 && rangeId <= 232:
        this.setState({icon:this.weatherIcon.Thunderstorm})
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({icon:this.weatherIcon.Rain})
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({icon:this.weatherIcon.Snow})
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({icon:this.weatherIcon.Rain})
        break;
      case rangeId >=700 && rangeId <=781:
        this.setState({icon:this.weatherIcon.Atmosphere})
        break;
      case rangeId >= 800 && rangeId <= 804:
        this.setState({icon:this.weatherIcon.Cloudy})
        break;
      case rangeId === 800:
        this.setState({icon:this.weatherIcon.Clear})
        break;
      default:
        this.setState({icon:this.weatherIcon.Cloudy})
        break;
    }
  }

  /*simplifyTemp(temp){
    let noDecimal = Math.floor(temp)
    return noDecimal;
  }*/
  
  getWeather = async (e) => {
    e.preventDefault();

    //const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    if (city){
    const callAPI = await fetch(`${apiKey.baseurl}${city},us&units=imperial&appid=${apiKey.key}`);
    
      //Charlotte,us
    const response = await callAPI.json();
    console.log(response);

    this.setState({
      city: `${response.name}`,
      country:`${response.sys.country}`,
      tempF: response.main.temp,
      tempMax: response.main.temp_max,
      tempMin: response.main.temp_min,
      description: response.weather[0].description,
      //icon: this.weatherIcon.Thunderstorm
      //country: response.sys.country
    })

    this.getWeatherIcon(this.weatherIcon, response.weather[0].id);
  } else {
    this.setState({error:true})
  }
  
}


  //state = {}
  render(){
    return (
      <div className = "App">
        <Form loadWeather={this.getWeather} error={this.state.error}/>
        <Weather 
        city={this.state.city} 
        tempF={Math.round(this.state.tempF)} 
        tempMin={Math.round(this.state.tempMin)} 
        tempMax = {Math.round(this.state.tempMax)} 
        description ={this.state.description} 
        weatherIcon={this.state.icon}/>
      </div>
    );
  }
}


/*function App() {
  return (
    <div className="App">
      <Weather/>
    </div>
  );
}*/

export default App;
