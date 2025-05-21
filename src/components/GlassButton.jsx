import React from 'react';

const GlassButton = ({ children, size = 'medium', onClick }) => {
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