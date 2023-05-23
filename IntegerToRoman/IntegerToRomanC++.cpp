class Solution {
public:
    string intToRoman(int num) {
        string retStr = "";
        int left = num;
    
        //Thousands --------------------------------------------------
        for(int i = 0; i < (left / 1000); i++){
            retStr += "M";
        }
        left = left % 1000;

        //Hundreds---------------------------------------------------
        if((left / 100) == 5){
            retStr += "D";
        }
        else if((left / 100) > 5 && (left / 100) != 9){
            retStr += "D";
            for(int i = 0; i < ((left / 100) - 5); i++){
                retStr += "C";
            }
        }
        else if((left / 100) == 9){
            retStr += "CM";
        }
        else if((left / 100) < 5 && (left / 100) != 4){
            for(int i = 0; i < ((left / 100)); i++){
                retStr += "C";
            }
        }
        else{
            retStr += "CD";
        }
        left = left % 100;

        //Tens ------------------------------------------------------------
        if((left / 10) == 5){
            retStr += "L";
        }
        else if((left / 10) > 5 && (left / 10) != 9){
            retStr += "L";
            for(int i = 0; i < ((left / 10) - 5); i++){
                retStr += "X";
            }
        }
        else if((left / 10) == 9){
            retStr += "XC";
        }
        else if((left / 10) < 5 && (left / 10) != 4){
            for(int i = 0; i < ((left / 10)); i++){
                retStr += "X";
            }
        }
        else{
            retStr += "XL";
        }
        left = left % 10;

        //Ones --------------------------------------------------------------
        if((left) == 5){
            retStr += "V";
        }
        else if((left) > 5 && (left) != 9){
            retStr += "V";
            for(int i = 0; i < ((left) - 5); i++){
                retStr += "I";
            }
        }
        else if((left) == 9){
            retStr += "IX";
        }
        else if((left) < 5 && (left) != 4){
            for(int i = 0; i < ((left)); i++){
                retStr += "I";
            }
        }
        else{
            retStr += "IV";
        }
        return retStr;
    }
};