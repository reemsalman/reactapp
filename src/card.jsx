import React from 'react';
import './index.css';

// عرف المكوّن كدالة (function) أو arrow function
function Card({ img, title, description, color, bgColor }) {
  return (
    <div className="card">
      <span className='icon' style={{ backgroundColor: bgColor, color: color }}>
        {img}</span>
        <h2>{title}</h2>
        <span className='line'></span>
        <p>{description}</p>
      
    </div>
  );
}

export default Card;
