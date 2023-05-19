class Solution {
    public int reverse(int x) {

        String retvalStr = String.valueOf(Math.abs(x));
        int retval;
        int negative = 0;
        if(x < 0){
            negative = 1;
        }

        StringBuilder reversed = new StringBuilder(retvalStr);
        reversed = reversed.reverse();
        try{
            if(negative == 1){
                retval = Integer.parseInt("-" + reversed.toString());
            }
            else{
                retval = Integer.parseInt(reversed.toString());
            }
        }
        catch(Exception E){
            return 0;
        }
        
        return retval;

    }
}