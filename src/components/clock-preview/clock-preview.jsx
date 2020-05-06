import React from 'react';
import './clock-preview.scss';
const ClockPreview = ({ data, otherTime }) => {
  const { hour, min, sec } = data;
  return (
    <div className="clock-preview">
      <div
        className="roller"
        style={{ transform: `translate(-50%, -50%) rotate( ${sec * 6}deg)` }}
      />
      <div className="overlay">
        {data.ampm ? (
          <>
            <h2 className="hour">{hour} :</h2>
            <h2 className="min">
              {min}
              <span className="ampm">{data.ampm}</span>
            </h2>
          </>
        ) : (
          <>
            <h2 className="hour">{hour} :</h2>
            <h2 className="min">
              {min}
              <span className="ampm">{}</span>
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default ClockPreview;
