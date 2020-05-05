import React, { useState, useEffect } from 'react';
import './Clock.scss';
import ClockPreview from '../../components/clock-preview/clock-preview';
import add from '../../assets/add.svg';
const Clock = () => {
  const [userDate, setUserDate] = useState({ hour: '', min: '', sec: '' });
  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      setUserDate({
        hour: date.getHours(),
        min: date.getMinutes(),
        sec: date.getSeconds()
      });
    }, 1000);
  }, []);

  const getDifferentTimeZoneTime = () => {
    const options = {
        timeZone: 'Europe/London',
        hour: 'numeric',
        minute: 'numeric'
        // second: 'numeric'
      },
      formatter = new Intl.DateTimeFormat([], options).format(new Date());
    console.log(formatter);
  };
  return (
    <div className="clock">
      <ClockPreview data={{ hour: userDate.hour, min: userDate.min }} />
      <div className="add">
        <img src={add} alt="add" />
      </div>
    </div>
  );
};

export default Clock;
