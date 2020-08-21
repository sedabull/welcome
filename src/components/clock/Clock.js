import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };//end this.state
    }//end constructor

    tick() {
        this.setState({
            date: new Date()
        });//end setState
    }//end tick

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);
    }//end componentDidMount

    componentWillUnmount() {
        clearInterval(this.timerId);
    }//end componentWillUnmount
    
    render() {
        return (
            <div className="Clock">
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );//end return JSX
    }//end render

}//end Clock

export default Clock;