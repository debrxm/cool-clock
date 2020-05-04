import React from 'react';
import './Timer.scss';
import Countdown from '../../components/countdown/Countdowns';
const Timer = () => {
  return (
    <div className="timer">
      <Countdown />
    </div>
  );
};

export default Timer;
