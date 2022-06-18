const removeFromArray = (...array) => {
    
    const newArray = array[0];
        return newArray.filter(val => !array.includes(val));
    };
    
    removeFromArray([1, 2, 3], "1", 3);
// Do not edit below this line
module.exports = removeFromArray;
