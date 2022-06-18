const sumAll = (...sum) => {
    
    let result = 0;

    sum.sort((a,b) => a-b);

 if(!Number.isInteger(sum[1]) || !Number.isInteger(sum[0])) return "ERROR"; 
    
    if(sum[0] < 0 || sum[1] < 0) return "ERROR";

        while(sum[0] <= sum[1]){
        result += sum[0];
        sum[0]++
		}
    

  return result;
}

  sumAll(10, [90, 1]);
// Do not edit below this line
module.exports = sumAll;
