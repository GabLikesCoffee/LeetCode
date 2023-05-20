/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let stringX = x.toString();
    if(stringX == stringX.split("").reverse().join("")){
        return true;
    }
    else{
        return false;
    }
};