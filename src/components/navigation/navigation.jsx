import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import setting from '../../assets/settings.svg';
import './navigation.scss';

const Navigation = ({ location: { pathname } }) => {
  return (
    <div className="navigation">
      <Link to="/setting">
        <img className="setting" src={setting} alt="Setting Icon" />
      </Link>
      <nav className="navbar">
        <div className={pathname === '/' ? 'active' : ''}>
          <Link to="">Alarm</Link>
        </div>
        <div className={pathname === '/clock' ? 'active' : ''}>
          <Link to="/clock">Clock</Link>
        </div>
        <div className={pathname === '/stopwatch' ? 'active' : ''}>
          <Link to="/stopwatch">Stopwatch</Link>
        </div>
        <div className={pathname === '/timer' ? 'active' : ''}>
          <Link to="/timer">Timer</Link>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navigation);
