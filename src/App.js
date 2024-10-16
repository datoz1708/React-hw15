import React from 'react';
import useSum from './useSum'; // ჰუკის იმპორტი

const App = () => {
  const num1 = 5;
  const num2 = 10;

  // ჰუკის გამოყენება
  useSum(num1, num2);

  return (
    <div>
      <h1>Check the console for the sum!</h1>
    </div>
  );
};

export default App;
