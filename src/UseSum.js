import { useEffect } from 'react';


function UseSum(a, b) {
  useEffect(() => {
    document.write("ჯამი:", a + b);
  }, [a, b]);
}

export default UseSum;
