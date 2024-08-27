import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ onClick, children, className, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${'font-bold flex border-2 rounded-full p-2 items-center border-[#E3B577] hover:bg-[#331A15] hover:text-white  gap-2'}`}
    >
      {children}
    </button>
  );
};

export default Button;