const ftoc = function(temp) {
  let conversion = (temp - 32) * (5/9);
   let result = Math.round(conversion* 10)/10;
   return result;
 };
 
 const ctof = function(temp) {
 let conversion = temp * (9/5)+32;
 let result = Math.round(conversion* 10)/10;
   return result;
 };
 
 ftoc(-100);
 ctof(-10);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
