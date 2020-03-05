import React, { Component } from 'react';
import './App.css';

import Info from './components/Info'
import Form from './components/Form'
import Weather from './components/Weather'

const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';

class App extends Component {

    state = {
      city: '',
      country: '',
      temp: '',
      pressure: '',
      wind: ''
    }

  gettingForecast = async (event) => {
    event.preventDefault();

    let cityName = event.target.elements.city.value;
    const weatherApiLink = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${openWeatherApiKey}`);
    const data = await weatherApiLink.json();
    // console.log(data);

    this.setState({
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      pressure: data.main.pressure,
      wind: data.wind.speed
    })
  }

  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingForecast} />
        <Weather 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          pressure={this.state.pressure}
          wind={this.state.wind}
        />
      </div>
        
    );
  }
}

export default App;
