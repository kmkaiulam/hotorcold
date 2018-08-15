import React from 'react';

import './guessform.css';

export default class GuessForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.guessSubmit(this.state.value);
        this.setState({
            value: ''
        })
    };


       
    render() {
         return (
            <form className="guessForm" onSubmit={this.handleSubmit}>
                <div className='guessInput'>
                    <label> 
                        <input type="number" min={1} max = {100} placeholder ='Enter your Guess' value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
                <div className= 'guessSubmit'>
                    <input type="submit" value="Guess" />
                </div>
            </form>
        );
    }
}