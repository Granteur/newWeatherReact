import React, { useState } from 'react';
import './formStyle.css';

const Form = props => {
    const [city, setCity] = useState('');
    return (
        <div className="container">
            <div>{props.error ? error() : null}</div>
            <form onSubmit={(e) => {
                e.preventDefault()
                props.loadWeather(city)
            }}>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <input
                            value={city}
                            onChange={(e) => { setCity(e.target.value) }}
                            type="text"
                            className="form-control"
                            name="city" autoComplete="off"
                            placeholder="Input City..."
                        />
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <button className="btn btn-info">Submit City</button>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </form>
        </div>
    );

    function error() {
        return (
            <div className="alert alert-danger mx-8" role="alert">
                Please enter valid city!
            </div>
        )
    }
};



export default Form;

//Everything below is unmodified code before talking with Chris to iron out the problems
/* import React from 'react';
import './formStyle.css';

const Form = props =>{
    return(
        <div className="container">
            <div>{props.error ? error() : null}</div>
            <form onSubmit={(e) => {
                e.preventDefault()
                props.loadWeather(city)
            }}>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <input type="text" className="form-control" name="city" autoComplete="off" placeholder="Input City..."/>
                </div>
                <div className="col-md-4"></div>
                </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <button className="btn btn-info">Submit City</button>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );

function error() {
    return (
        <div className="alert alert-danger mx-8" role="alert">
            Please enter valid city!
        </div>
    )
}
};



export default Form; */