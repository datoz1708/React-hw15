import React, { useEffect } from 'react';

const ChangeBackground = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.style.backgroundColor = '#f0a500';
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Watch the background color change after 2 seconds!</h1>
    </div>
  );
};

export default ChangeBackground;
