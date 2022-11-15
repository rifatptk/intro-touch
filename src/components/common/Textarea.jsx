import React from 'react';

const Textarea = ({ id, placeholder, value, onChange, name, className }) => {
  return (
    <textarea
      id={id}
      name={name}
      className={`w-full min-h-[132px] px-4 py-[10px] text-brand-dark-gray text-[14px] outline-none rounded-[5px] ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;
