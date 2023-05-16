//Longest Substring without repeating characters

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let array = [];
    let max = 0;

    //loop through the letters of the word
    for(let i = 0; i < s.length; i++){

        //Loop through the current longest substring
        for(let j = 0; j < array.length; j++){

            //If the current character in the word is already in the substring, set substring to begin after dupe letter
            if(s.charAt(i) == array[j]){

                //Update max substring if necessary
                if(array.length > max){
                    max = array.length;
                }

                //Splice array
                let index = array.indexOf(s.charAt(i));
                array = array.slice(index + 1);
                break;
            }
        }

        //Push current character to the substring array
        array.push(s.charAt(i))
    }

    //Returns the maximum substring size
    if(max == 0 || array.length > max){
        return array.length;
    }
    return max;
};