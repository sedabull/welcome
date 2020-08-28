import './Jeopardy.css';
import React, { Component } from 'react';

import JeopardyService from '../../services/jeopardyService';
import JeopardyDisplay from '../jeopardyDisplay/JeopardyDisplay';

class Jeopardy extends Component {

    constructor(props) {
        super(props);

        this.client = new JeopardyService();
        this.state = {
            score: 0,
            input: '',
            hasAnswered: false,
            question: {
                id: 0,
                answer: '',
                question: '',
                value: 0,
                airdate: '',
                created_at: '',
                updated_at: '',
                category_id: 0,
                game_id: null,
                invalid_count: null,
                category: {
                    id: 0,
                    title: '',
                    created_at: '',
                    updated_at: '',
                    clues_count: 0
                }//end category
            }//end question
        }//end this.state
    }//end constructor

    componentDidMount() {
        this.client.getRandomQuestion().then(question => {
            this.setState({ question });
        });//end getRandomQuestion
    }//end componentDidMount

    isCloseEnough() {
        let input = this.state.input || '';
        let possibleAnswers = this.state.question.answer.match(/\w+/gi) || [];
        
        if(input.toLowerCase() === this.state.question.answer.toLowerCase()) return true;
        for(let possibleAnswer of possibleAnswers) {
            if(input.toLowerCase() === possibleAnswer.toLowerCase()) {
                return true;
            }//end if
        }//end for

        return false;
    }//end isCloseEnough

    handleInput = event => {
        this.setState({ input: event.target.value })
    }//end handleInput

    handleClick = event => {
        this.setState(state => {
            if(state.hasAnswered) {
                this.client.getRandomQuestion().then(question => {
                    this.setState({ question });
                });//end getRandomQuestion
                
                return {
                    input: '',
                    hasAnswered: false
                };//end return changes
            } else {
                let value = state.question.value;

                return {
                    hasAnswered: true,
                    score: this.isCloseEnough() ? state.score + value : state.score - value
                };//end return changes
            }//end if/else
        });//end setState
    }//end handleClick

    render() {
        let resultDiv = (
            <div>
                <h3>{this.isCloseEnough() ? 'Correct!' : 'Incorrect!'}</h3>
                <p>{this.state.question.answer}</p>
            </div>
        );//end resultDiv

        return (
            <div className="Jeopardy">
                <h1>Total Score: {this.state.score}</h1>
                <JeopardyDisplay 
                    category={this.state.question.category.title}
                    value={this.state.question.value}
                    clue={this.state.question.question}
                />
                <input type="text" onChange={this.handleInput} value={this.input}/><br/>
                <button onClick={this.handleClick}>{this.state.hasAnswered ? 'Next Question' : 'Check Answer'}</button>
                {this.state.hasAnswered ? resultDiv : null}
            </div>
        );//end return JSX
    }//end render

}//end class Jeopardy

export default Jeopardy;