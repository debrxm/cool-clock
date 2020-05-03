import React from 'react';
import { withRouter } from 'react-router-dom';
import leftArrow from '../../assets/leftArrow.svg';
import './Setting.scss';
const Setting = ({ history }) => {
  return (
    <div className="setting">
      <div className="head">
        <img src={leftArrow} alt="Left Icon" onClick={() => history.goBack()} />
      </div>
      <h1>Setting</h1>
    </div>
  );
};

export default withRouter(Setting);
