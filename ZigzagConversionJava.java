class Solution {
    public String convert(String s, int numRows) {
        String retval = "";
        int bounce = 0;
        Boolean increment = true;
        ArrayList<ArrayList<String>> array = new ArrayList<>();

        if(numRows == 1){
            return s;
        }

        for(int i = 0; i < numRows; i++){
            ArrayList<String> row = new ArrayList<>();
            array.add(row);
        }

        for(int i = 0; i < s.length(); i++){
            array.get(bounce).add("" + s.charAt(i));

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
        for(int i = 0; i < numRows; i++){
            for(int j = 0; j < array.get(i).size(); j++){
                retval += array.get(i).get(j);
            }
        }

        return retval;
    }
}