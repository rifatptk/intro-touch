import React from 'react';

const TextField = ({
  icon,
  type,
  id,
  placeholder,
  label,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="relative text-[14px] font-manrope border border-gray-300 rounded-[15px] p-5 flex items-center gap-[10px]">
      <img src={icon} alt="" className="h-4" />
      <input
        type={type}
        id={id}
        name={name}
        className="w-full font-semibold text-brand-dark-gray outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label
        for={id}
        className="absolute -top-3 left-8 bg-white px-1 text-brand-mid-gray"
      >
        {label}
      </label>
    </div>
  );
};

export default TextField;
