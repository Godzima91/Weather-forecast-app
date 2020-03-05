import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div className="weatherInfoStyle">
                {this.props.city &&  
                    <div>
                        <p>City:&nbsp; {this.props.city}</p>
                        <p>Country:&nbsp; {this.props.country}</p>
                        <p>Temperature:&nbsp; {this.props.temp} &deg; C</p>
                        <p>Pressure:&nbsp; {this.props.pressure} Pa</p>
                        <p>Wind:&nbsp; {this.props.wind} meters per second</p>

                    </div>
                }
                
            </div>
        )
    }
}

export default Weather;