import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [bgColor, setBgColor] = useState('bg-black');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { 
        setBgColor('bg-gray-800'); 
      } else {
        setBgColor('bg-black');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`h-20 w-full ${bgColor} flex justify-center items-center fixed z-[100] transition-colors duration-300 shadow-md`}>
      <div style={{ fontFamily: "'Zen Dots', sans-serif", color: 'white', fontSize: '2rem' }} 
           className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        Discover
      </div>
    </div>
  );
};

export default Navbar;
