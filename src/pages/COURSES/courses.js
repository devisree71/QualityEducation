import React from 'react';
import './courses.css';
import { lang } from './coursedata.js';

function Courses() {
  const lis = lang.map((item) => {
    return (
      <div className="box1" key={item.id}>
        <img src={item.image} className="img1" alt={item.name} />
        <div className="subt"><h2>
          {item.name} 
        </h2>
        <button className="cbtn">{item.desc}</button></div>
      </div>
    );
  });

  return <div className="flex1">{lis}</div>;
}

export default Courses;
