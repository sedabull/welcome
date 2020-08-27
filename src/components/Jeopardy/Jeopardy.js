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

    handleInput = event => {
        this.setState({ input: event.target.value })
    }//end handleInput

    render() {
        return (
            <div className="Jeopardy">
                <h1>Total Score: {this.state.score}</h1>
                <JeopardyDisplay 
                    category={this.state.question.category.title}
                    value={this.state.question.value}
                    clue={this.state.question.question}
                />
                <input type="text" onChange={this.handleInput} value={this.input}/>
            </div>
        );//end return JSX
    }//end render

}//end class Jeopardy

export default Jeopardy;