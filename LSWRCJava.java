//Longest Substring without repeating characters

class Solution {
    public int lengthOfLongestSubstring(String s) {
        String retval = "";
        int max = 0;

        for(int i = 0; i < s.length(); i++){
            char currentChar = s.charAt(i);
            for(int j = 0; j < retval.length(); j++){
                if(currentChar == retval.charAt(j)){
                    if(retval.length() > max){
                        max = retval.length();
                    }
                    int index = retval.indexOf(currentChar);
                    retval = retval.substring(index+1);
                }
            }
            retval += currentChar;
        }

        if(retval.length() > max){
            max = retval.length();
        }
        return max;
    }
}