/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    //The string we'll be returning
    let retval = "";

    //2D array to store the letters by row
    let array = new Array(numRows);

    //Boolean for whether we're zigging up or down
    let increment = true;

    //Current array row index
    let bounce = 0;

    //One row = no zigzag
    if(numRows == 1){
        return s;
    }

    //Set up 2D array to have an array for each row
    for(let i = 0; i < numRows; i++){
        array[i] = [];
    }

    //Zigzag through each letter of s
    for(i = 0; i < s.length; i++){

        //Push the char to the array of index bounce
        array[bounce].push(s.charAt(i));

        //If bounce is at 0 or s.length, switch direction of zigzag
        if(bounce == 0){
            increment = true;
        }
        else if(bounce == numRows-1){
            increment = false;
        }

        //If we're going up
        if(increment == true){
            bounce++;
        }
        //If we're going down
        else{
            bounce--;
        }
    }

    //Go through the array row by row and build the string
    for(i = 0; i < numRows; i++){
        for(j = 0; j < array[i].length; j++){
            retval += array[i][j];
        }
    }
    
    return retval;
};