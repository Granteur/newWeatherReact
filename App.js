import React from 'react';

import './App.css';

import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './appComponent/weather.component';

const apiKey = {
  key: "62715d8105c316b2c19f1b51a01dd879",
  baseurl: "https://api.openweathermap.org/data/2.5/weather?q=Charlotte,us",
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
    this.state = {};
    this.getWeather();
  }
  
  getWeather = async () =>{
    const callAPI = await fetch(`${apiKey.baseurl}&appid=${apiKey.key}`);

    const respone = await callAPI.json();

    console.log(response);
  }


  state = {}
  render(){
    return (
      <div className = "App">
        <Weather/>
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
