const palindromes = function (text) {

    const regex = /[^A-Za-z0-9]/g;
    text = text.toLowerCase().replace(regex, '');
    
    let len = text.length;

    for (let i = 0; i < len/2; i++) {
       if (text[i] !== text[len - 1 - i]) {
          return false;
       };
    };
    return true;
 };
 palindromes("ZZZZ car, a man, a maracaz.")
// Do not edit below this line
module.exports = palindromes;
