import React from 'react';
import { useNavigate } from 'react-router-dom';

const Brand = () => {
  const navigate = useNavigate();
  return (
    <div
      className="text-white font-inter w-fit font-bold leading-[1] cursor-pointer"
      onClick={() => navigate('/')}
      title="Intro Touch"
    >
      <h1 className="text-xl">IntroTouch</h1>
      <p className="text-right text-[10px]">.com</p>
    </div>
  );
};

export default Brand;
