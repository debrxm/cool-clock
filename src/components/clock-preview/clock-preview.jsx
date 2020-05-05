import React from 'react';
import './clock-preview.scss';
const ClockPreview = ({ data: { hour, min } }) => {
  return (
    <div className="clock-preview">
      <h2 className="hour">{hour} :</h2>
      <h2 className="min">
        {min}
        <span className="ampm">{'AM'}</span>
      </h2>
    </div>
  );
};

export default ClockPreview;
