class Solution {
public:
    int reverse(int x) {
        //Value for keeping track if x is negative
        bool negative = false;

        //Turns x into a string and stores it without its negative sign if it has one
        std::string retvalStr = std::to_string(abs(x));

        //The value we're returning
        int retval;
        
        //If x is negative we keep track of that here
        if(x < 0){
            negative = true;
        }

        //Reverse our string
        std::reverse(retvalStr.begin(), retvalStr.end());


        //If x was negative, we add a negative symbol to the beginning of our reversed string
        if(negative == true){
            retvalStr = "-" + retvalStr;
        }

        //Try section in case the number is too big or small to fit in int, then we return 0;
        try{
            //Convert the string back into an int
            retval = std::stoi(retvalStr);

            //Return it
            return retval;
        }
        //If the try section breaks, return 0;
        catch(exception E){
            return 0;
        }
    }
};