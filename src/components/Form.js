import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.weatherMethod} className="formStyle">
                <input type="text" name="city" placeholder="enter your city" />
                <button>Get weather</button>
            </form>
        )
    }
}

export default Form;