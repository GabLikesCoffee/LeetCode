/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let string = "";
    let retval = "";
    let max = 0;
    if(s.length > 0){
        max = 1;
    }else{
        return "";
    }

    for(let i = 0; i < s.length; i++){
        string = s.charAt(i);

        for(let j = i+1; j < s.length; j++){
            string += s.charAt(j);
            let reverse = string;
            reverse = string.split('').reverse().join('');
            if(reverse == string && string.length > max){
                retval = string;
                max = string.length;
            }
        }
    }
    if(max == 1){
        return s.charAt(0);
    }

    return retval;
};