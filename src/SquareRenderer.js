import React, { useState } from 'react';

const SquareRenderer = () => {
  
  const [number, setNumber] = useState(5);

  return (
    <div>
      {number >= 0 ? (
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'green',
          }}
        ></div>
      ) : (
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'red',
          }}
        ></div>
      )}
    </div>
  );
};

export default SquareRenderer;
