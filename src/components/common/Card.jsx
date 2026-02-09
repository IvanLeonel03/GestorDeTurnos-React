import React from 'react';

const Card = ({ children, className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      {children}
    </div>
  );
};

export default Card;
