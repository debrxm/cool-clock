import React from 'react';
import AlarmPreview from '../../components/alarm-preview/alarm-preview';
import add from '../../assets/add.svg';
import './Alarm.scss';
const Alarm = () => {
  return (
    <div className="alarm">
      <AlarmPreview data={{ time: '1:00', ampm: 'am' }} />
      <AlarmPreview data={{ time: '12:00', ampm: 'pm' }} />
      <AlarmPreview data={{ time: '8:00', ampm: 'pm' }} />
      <AlarmPreview data={{ time: '2:00', ampm: 'am' }} />
      <div className="add">
        <img src={add} alt="add" />
      </div>
    </div>
  );
};

export default Alarm;
