import { useEffect } from 'react';


function useSum(a, b) {
  useEffect(() => {
    document.write("ჯამი:", a + b);
  }, [a, b]);
}

export default useSum;
