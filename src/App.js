import React from 'react';
import useSum from './UseSum';

const App = () => {
  const num1 = 5;
  const num2 = 10;

  useSum(num1, num2);

  return (
    <div>
      <h1>Check the console for the sum!</h1>
    </div>
  );
};

export default App;
