import { useEffect } from 'react';

// ახალი ჰუკი, რომელიც იღებს ორ რიცხვს და ბეჭდავს მათ ჯამს
function useSum(a, b) {
  useEffect(() => {
    console.log("The sum of the numbers is:", a + b); // დაბეჭდავს ჯამს
  }, [a, b]); // რიცხვების ცვლილებაზე რეაგირება
}

export default useSum;
