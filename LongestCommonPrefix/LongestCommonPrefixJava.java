class Solution {
    public String longestCommonPrefix(String[] strs) {

        String retStr = "";
        String current = "";
        int smallest = 300;

        for(int i = 0; i < strs.length; i++){
            if(strs[i].length() < smallest){
                smallest = strs[i].length();
            }
        }
        if(strs[0] == ""){
            return "";
        }

        for(int i = 0; i < smallest; i++){
            current += strs[0].charAt(i);
            for(int j = 0; j < strs.length; j++){
                if(strs[j].charAt(i) != current.charAt(i)){
                    return retStr;
                }
            }
            retStr += strs[0].charAt(i);
        }
        return retStr;
    }
}