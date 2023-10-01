import React from 'react';
import './reg.css';
import Stureg from './Stureg';
import Mentorreg from './Mentorreg';
import { useNavigate } from 'react-router-dom';

export default function As() {
  const navigate = useNavigate();

  return (
   <div className="rr"> 
    <div className="card2">
      <h2 className="title">Register as</h2>
      <div className="button-container">
        <button className="btnn" onClick={() => navigate('/Stureg')} type="submit">
          Student
        </button>
        <button className="btnn" onClick={() => navigate('/Mentorreg')} type="submit">
          Mentor
        </button>
      </div>
      </div>
    </div>
  );
}
