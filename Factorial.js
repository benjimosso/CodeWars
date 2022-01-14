
  function FirstFactorial(num) {
    
    return num ? num * FirstFactorial(num - 1) : 1;; 
    // or return (n != 1) ? n * factorial(n - 1) : 1;
  }

  console.log(FirstFactorial(5))