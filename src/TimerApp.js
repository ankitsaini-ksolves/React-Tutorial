//TimerApp.js
import React from 'react';

class TimerApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            isStarted: false 
        };
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    startTimer = () => {
        if (!this.state.isStarted) {
            this.timer = setInterval(() => {
                this.setState((prevState) => ({
                    time: prevState.time + 1,
                    isStarted: true
                }));
            }, 1000);
        }
    };

    pauseTimer = () => {
        clearInterval(this.timer);
        this.setState({ isStarted: false });
    };

    resetTimer = () => {
        clearInterval(this.timer);
        this.setState({ time: 0, isStarted: false });
    };

    render() {
        return (
            <div>
                <h2>Timer: {this.state.time} seconds</h2>
                <button className="btn btn-primary m-2" onClick={this.startTimer}>Start</button>
                <button className="btn btn-warning m-2" onClick={this.pauseTimer}>Pause</button>
                <button className="btn btn-danger m-2" onClick={this.resetTimer}>Reset</button>
            </div>
        );
    }
}

export default TimerApp;
