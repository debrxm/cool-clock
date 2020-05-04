import React, { Component } from 'react';
import doubleArrow from '../../assets/doubleArrow.svg';
import './countdown.scss';

class Countdown extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        alert('Countdown ended');
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: this.state.timerStart
      });
    }
  };

  adjustTimer = input => {
    const { timerTime, timerOn } = this.state;
    if (!timerOn) {
      if (input === 'incHours' && timerTime + 3600000 < 216000000) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === 'decHours' && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === 'incMinutes' && timerTime + 60000 < 216000000) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === 'decMinutes' && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === 'incSeconds' && timerTime + 1000 < 216000000) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === 'decSeconds' && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };

  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ('0' + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ('0' + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ('0' + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    return (
      <div className="countdown">
        <div className="countdown-display">
          <div className="top-btn">
            <button onClick={() => this.adjustTimer('incHours')}>
              <img src={doubleArrow} alt="arrow up" className="inc" />
            </button>
            <button onClick={() => this.adjustTimer('incMinutes')}>
              <img src={doubleArrow} alt="arrow up" className="inc" />
            </button>
            <button onClick={() => this.adjustTimer('incSeconds')}>
              <img src={doubleArrow} alt="arrow up" className="inc" />
            </button>
          </div>

          <div className="countdown-time">
            <h2>
              {hours}
              <span>hrs</span>
            </h2>{' '}
            <h2>
              {minutes}
              <span>mins</span>
            </h2>{' '}
            <h2>
              {seconds}
              <span>secs</span>
            </h2>
          </div>

          <div className="bottom-btn">
            <button onClick={() => this.adjustTimer('decHours')}>
              <img src={doubleArrow} alt="arrow down" className="dec" />
            </button>
            <button onClick={() => this.adjustTimer('decMinutes')}>
              <img src={doubleArrow} alt="arrow down" className="dec" />
            </button>
            <button onClick={() => this.adjustTimer('decSeconds')}>
              <img src={doubleArrow} alt="arrow down" className="dec" />
            </button>
          </div>
        </div>

        <div className="bottom-controls">
          {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
            <button className="button-start" onClick={this.startTimer}>
              Start
            </button>
          )}
          <div className="btn-flex">
            {timerOn === true && timerTime >= 1000 && (
              <button className="button-stop" onClick={this.stopTimer}>
                Stop
              </button>
            )}
            {timerOn === false &&
              (timerStart !== 0 &&
                timerStart !== timerTime &&
                timerTime !== 0) && (
                <button className="button-resume" onClick={this.startTimer}>
                  Resume
                </button>
              )}

            {(timerOn === false || timerTime < 1000) &&
              (timerStart !== timerTime && timerStart > 0) && (
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

export default Countdown;
