import React from 'react';

const Form = props => (
    <form onSubmit={props.weatherMethod} className="formStyle">
        <input type="text" name="city" placeholder="enter your city" />
        <button>Get weather</button>
    </form>
)

export default Form;