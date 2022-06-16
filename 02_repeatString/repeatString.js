const repeatString = (str,num) => {

    let repeatString = "";
   
    if(num >= 0){
        while(num > 0) {
            repeatString += str;
            num--;
        }   
    }

    else{
        return "ERROR";
    }

    return repeatString;
};

repeatString ("",-1);
// Do not edit below this line
module.exports = repeatString;
