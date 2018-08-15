import React from 'react';
import GuessForm from './guessform';
import Feedback from './feedback';
import Bank from './bank'
import Counter from './counter'
import NavLinks from './navlinks'

import './game.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: 'Make your Guess',
            answer: this.secretAnswerGenerator(),
            gamestate:'game', 
            count: 0,
            bank: [],
        }
        this.guessSubmit= this.guessSubmit.bind(this);
        this.newGameClick= this.newGameClick.bind(this);
        this.whatClick= this.whatClick.bind(this);
    }
    secretAnswerGenerator() {
        let secretAnswer = Math.floor(Math.random()*100)
        return secretAnswer
    }
    incrementCount() {
        this.setState((prevState, props) => ({
        count: prevState.count + 1
        }) 
    )}
    setFeedback(value){
        if (value == this.state.answer){
            this.setState({
                feedback: 'You won! Click new game to play again'
            })
        }
        if (this.state.answer - value < 10 && this.state.answer - value > 0){
            this.setState({
                feedback: 'hot'
            })
        }
        if (this.state.answer - value < 20 && this.state.answer - value > 9){
            this.setState({
                feedback: 'Kinda hot'
            })
        }
        if (this.state.answer - value < 30 && this.state.answer - value > 19){
            this.setState({
                feedback: 'less than warm'
            })
        }
        if (this.state.answer - value >30){
            this.setState({
                feedback: 'cold'
            })
        }
    }
    guessSubmit(value){
        let currentBank= [...this.state.bank, value]
        this.setState({
           bank: currentBank
        })
        this.incrementCount();
        this.setFeedback(value);
    }
    newGameClick(){
        this.setState({
        feedback: 'Make your Guess',
        answer: this.secretAnswerGenerator(),
        gamestate: 'game',
        count: 0,
        bank: [],
        })
    }
    whatClick(){
        this.setState({
            gamestate: 'what-info'
        })
    }
    
    render() {
    const banks=this.state.bank;
        console.log(banks);
        if(this.state.gamestate === 'game'){
            return ( 
                <div className = 'game'>
                    <NavLinks onClickNew= {this.newGameClick} onClickWhat = {this.whatClick}/>
                    <div className ='title'><h1> HOT or COLD </h1> </div>
                    <div className = 'gameboard'>
                        <Feedback feedback = {this.state.feedback} />
                        <GuessForm guessSubmit = {this.guessSubmit} />
                        <Counter count= {this.state.count}/>
                        <div className ='gamebank'>
                        <Bank bank={this.state.bank}/>
                        </div>
                    </div>
                </div>
            );
        }
        else if (this.state.gamestate ==='what-info'){
            return (
                <div className = 'info'>
                <section id="what" tabIndex="-1">
                    <h2>What do I do?</h2>
                    <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
                    <ol>
                        <li>I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
                        <li>You need to <strong>guess</strong> until you can find the hidden secret number.</li>
                        <li>You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
                    </ol>
                        <button onClick={this.newGameClick}> Got It! </button>
                    </section>
                </div>
            )
        }   
    }
}



