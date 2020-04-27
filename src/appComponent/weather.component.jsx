import React from 'react';
import './formStyle.css';




const Weather = (props) => {
    return (
        <div className = "container">
            <div className = "cards">
                <h1>{props.city}</h1>
                <h5 className="py-4">
                    <i className ={`wi ${props.weatherIcon} display-1`}/>
                </h5>
                <h1 className = "py-2">{props.tempF}&deg;F</h1>
                {/** high and low temps for the day */}
                {minmaxTemp(props.tempMin, props.tempMax)}

                <h4 className="py-3">{props.description}</h4>
            </div>
        </div>
    );
};

function minmaxTemp(min, max){
    return (
        <h3>
            <span className = "px-4">Low: {min}&deg;F</span>
            <span className = "px-4">High: {max}&deg;F</span>
        </h3>
    );
}

export default Weather;