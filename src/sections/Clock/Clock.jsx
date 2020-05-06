import React, { useState, useEffect } from 'react';
import './Clock.scss';
import ClockPreview from '../../components/clock-preview/clock-preview';
import add from '../../assets/add.svg';
const Clock = () => {
  const [userDate, setUserDate] = useState({
    hour: '',
    min: '',
    sec: ''
  });
  const [otherTime, setOtherTime] = useState({ hour: '', min: '', ampm: '' });
  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      const options = {
          timeZone: 'Europe/London',
          hour: 'numeric',
          minute: 'numeric'
        },
        formatter = new Intl.DateTimeFormat([], options).format(new Date());
      console.log(formatter.split(' ')[0].split(':'));

      setOtherTime({
        hour: formatter.split(' ')[0].split(':')[0],
        min: formatter.split(' ')[0].split(':')[1],
        ampm: formatter.split(' ')[1]
      });
      setUserDate({
        hour: date.getHours(),
        min: date.getMinutes(),
        sec: date.getSeconds()
      });
    }, 1000);
  }, []);
  return (
    <div className="clock">
      <ClockPreview
        data={{ hour: userDate.hour, min: userDate.min, sec: userDate.sec }}
      />
      <ClockPreview
        data={{
          hour: otherTime.hour,
          min: otherTime.min,
          sec: userDate.sec,
          ampm: otherTime.ampm
        }}
      />
      <div className="add">
        <img src={add} alt="add" />
      </div>
    </div>
  );
};

export default Clock;
