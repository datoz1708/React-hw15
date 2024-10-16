import React, { useEffect } from 'react';

const ChangeBackground = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.style.backgroundColor = "orange";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>ეკრანის ფონი შეიცვლება 2 წამში</h1>
    </div>
  );
};

export default ChangeBackground;
