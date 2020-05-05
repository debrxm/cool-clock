import React from 'react';
import './Stopwatch.scss';
class Stopwatch extends React.Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };

  render() {
    const { timerTime } = this.state;
    let centiseconds = ('0' + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ('0' + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ('0' + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ('0' + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div className="stopwatch">
        <div className="stopwatch-display-container">
          <div className="stopwatch-display">
            <h2>
              {' '}
              {hours} : {minutes} : {seconds} : {centiseconds}
            </h2>
          </div>
        </div>
        <div className="bottom-controls">
          {/* {this.state.timerOn === false && this.state.timerTime === 0 && (
            <button className="button-start" onClick={this.startTimer}>
              Start
            </button>
          )} */}
          <div className="btn-flex">
            {this.state.timerOn === true &&
              (this.state.timerTime === 0 || this.state.timerTime > 0) && (
                <button className="button-stop" onClick={this.stopTimer}>
                  Stop
                </button>
              )}
            {this.state.timerOn === false &&
              (this.state.timerTime === 0 || this.state.timerTime > 0) && (
                <button className="button-resume" onClick={this.startTimer}>
                  Start
                </button>
              )}
            {(this.state.timerTime === 0 || this.state.timerTime > 0) && (
              <button className="button-reset" onClick={this.resetTimer}>
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
