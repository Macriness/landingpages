import React from 'react';

const DotsBackground = () => {
  return (
    <div
      className="absolute inset-0 -z-10 opacity-30"
      style={{
        backgroundImage: 'radial-gradient(rgb(237, 109, 11) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    />
  );
};

export default DotsBackground;