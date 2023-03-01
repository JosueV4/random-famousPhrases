import React from 'react';

const Button = ({ handleClick }) => {
  return (
    <button className="text-2xl font-normal text-gray-600 border-2 border-white rounded-lg w-56 h-14 bg-white bg-opacity-60 mt-16" onClick={handleClick}>
      <span>Ver otro</span>
    </button>
  );
};

export default Button;
