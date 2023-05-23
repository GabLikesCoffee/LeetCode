/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let retStr = "";
    let left = num;
   
   //Thousands --------------------------------------------------
    for(i = 0; i < parseInt(left / 1000); i++){
        retStr += "M";
    }
    left = left % 1000;

    //Hundreds---------------------------------------------------
    if(parseInt(left / 100) == 5){
        retStr += "D";
    }
    else if(parseInt(left / 100) > 5 && parseInt(left / 100) != 9){
        retStr += "D";
        for(let i = 0; i < (parseInt(left / 100) - 5); i++){
            retStr += "C";
        }
    }
    else if( parseInt(left / 100) == 9){
        retStr += "CM";
    }
    else if(parseInt(left / 100) < 5 && parseInt(left / 100) != 4){
        for(let i = 0; i < (parseInt(left / 100)); i++){
            retStr += "C";
        }
    }
    else{
        retStr += "CD";
    }
    left = left % 100;

    //Tens ------------------------------------------------------------
    if(parseInt(left / 10) == 5){
        retStr += "L";
    }
    else if(parseInt(left / 10) > 5 && parseInt(left / 10) != 9){
        retStr += "L";
        for(let i = 0; i < (parseInt(left / 10) - 5); i++){
            retStr += "X";
        }
    }
    else if( parseInt(left / 10) == 9){
        retStr += "XC";
    }
    else if(parseInt(left / 10) < 5 && parseInt(left / 10) != 4){
        for(let i = 0; i < (parseInt(left / 10)); i++){
            retStr += "X";
        }
    }
    else{
        retStr += "XL";
    }
    left = left % 10;

    //Ones --------------------------------------------------------------
    if(parseInt(left) == 5){
        retStr += "V";
    }
    else if(parseInt(left) > 5 && parseInt(left) != 9){
        retStr += "V";
        for(let i = 0; i < (parseInt(left) - 5); i++){
            retStr += "I";
        }
    }
    else if( parseInt(left) == 9){
        retStr += "IX";
    }
    else if(parseInt(left) < 5 && parseInt(left) != 4){
        for(let i = 0; i < (parseInt(left)); i++){
            retStr += "I";
        }
    }
    else{
        retStr += "IV";
    }
    return retStr;

};