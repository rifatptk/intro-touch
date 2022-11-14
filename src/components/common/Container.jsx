import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-[510px] min-h-screen mx-auto sm:rounded-[20px] overflow-hidden">
      {children}
    </div>
  );
};

export default Container;
