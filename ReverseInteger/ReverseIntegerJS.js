/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let negative = false;
    if(x < 0){
        negative = true
    }
    let retval = x.toString();

    if(negative == true){
        retval = "-" + retval.split("").reverse().join("");
    }
    else{
        retval = retval.split("").reverse().join("");
    }

    retval = parseInt(retval);
    if(retval > 2147483647 || retval < -2147483648){
        return 0;
    }
    return retval;
};