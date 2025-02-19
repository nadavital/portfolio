import React from 'react';
import '../styles/GlassButton.css';

const GlassButton = ({ children, size = 'medium', onClick }) => {
  // Log the size prop to verify it's being passed correctly
  console.log('Button size:', size);
  
  return (
    <div className={`button-wrap button-${size}`}>
      <div className="button-shadow"></div>
      <button onClick={onClick}>
        <span>{children}</span>
      </button>
    </div>
  );
};

export default GlassButton;