import React from 'react';

const Weather = props => 
( 
    <div className="weatherInfoStyle">
        {props.city &&  
            <div>
                <p>City:&nbsp; {props.city}</p>
                <p>Country:&nbsp; {props.country}</p>
                <p>Temperature:&nbsp; {props.temp} &deg; C</p>
                <p>Pressure:&nbsp; {props.pressure} Pa</p>
                <p>Wind:&nbsp; {props.wind} meters per second</p> 
            </div> 
        }
                <p className="error">{props.error}</p>

    </div>
)

export default Weather;