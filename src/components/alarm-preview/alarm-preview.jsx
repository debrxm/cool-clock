import React, { useState } from 'react';
import off from '../../assets/off.svg';
import on from '../../assets/on.svg';
import './alarm-preview.scss';
const AlarmPreview = ({ data: { time, ampm } }) => {
  const [isOn, setIsOn] = useState(false);
  const handleToggleAlarm = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="alarm-preview">
      <div className="lft">
        <h2 className="time" style={isOn ? { color: '#2680eb' } : {}}>
          {time}
          <span style={isOn ? { color: '#2680eb' } : {}}>
            {ampm.toUpperCase()}
          </span>
        </h2>
        <span style={isOn ? { color: '#2680eb' } : {}}>Alarm</span>
      </div>
      <div className="rgt">
        {isOn ? (
          <img src={on} alt="on" onClick={handleToggleAlarm} />
        ) : (
          <img src={off} alt="off" onClick={handleToggleAlarm} />
        )}
      </div>
    </div>
  );
};

export default AlarmPreview;
