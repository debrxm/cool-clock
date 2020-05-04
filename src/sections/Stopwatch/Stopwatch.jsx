import React, { useState } from 'react';
import './Stopwatch.scss';
const Stopwatch = () => {
  const [state, setState] = useState({
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    isTimerFinished: true
  });
  const startTimer = () => {
    setState({
      timerOn: true,
      timerStart: state.timerTime,
      timerTime: state.timerTime,
      isTimerFinished: false
    });

    setInterval(() => {
      const newTime = state.timerTime - 10;
      if (newTime >= 0) {
        setState({ timerTime: newTime });
      } else {
        clearInterval();
        setState({ timerOn: false, isTimerFinished: true });
      }
    }, 10);
  };
  const stopTimer = () => {
    clearInterval();
    setState({ timerOn: false });
  };
  const resetTimer = () => {
    if (!state.timerOn) {
      setState({ timerTime: state.timerStart });
    }
  };
  return (
    <div className="stopwatch">
      <h1 onClick={startTimer}>Stopwatch</h1>
      <span>{state.timerTime}</span>
      <span>{state.timerStart}</span>
    </div>
  );
};

export default Stopwatch;
