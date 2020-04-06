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
      wind: '',
      error: ''
    }

  gettingForecast = async (event) => {
    event.preventDefault();
    var city = event.target.elements.city.value;

  if(city) {

      const weatherApiLink = await 
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=json&appid=${openWeatherApiKey}`);
      const data = await weatherApiLink.json();

      this.setState({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        error: ''
      })
    } else {
      this.setState({
        city: '',
        country: '',
        temp: '',
        pressure: '',
        wind: '',
        error: 'Enter city!'
      })
    }
    
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
          error={this.state.error}
        />          
      </div>
      
        
    );
  }
}

export default App;
