import React from 'react';

const Button = ({ onClick, text, className }) => {
  return (
    <button
      className={`bg-brand-dark-gray text-white font-[300] block mx-auto rounded-[5px] font-inter px-4 py-2 hover:opacity-95 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
