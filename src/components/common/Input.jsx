import React from 'react';

const Input = ({ type, id, placeholder, value, onChange, name, className }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={`w-full px-4 py-3 text-brand-dark-gray text-[14px] outline-none rounded-[5px] ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
