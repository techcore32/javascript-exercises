const fibonacci = function(n) {

    let limit = parseInt(n);

    if(limit < 0) return "OOPS";
    num1 = 1;
    num2 = 0;
     
      for(let i = 1; i <= limit; i++){
        let sum = num1 + num2;
        num1 = num2
        num2 = sum;
      }
    
   return num2;
  };
  
  fibonacci("8");
// Do not edit below this line
module.exports = fibonacci;
