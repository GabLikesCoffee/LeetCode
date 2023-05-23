public class Solution {
    public string LongestCommonPrefix(string[] strs) {
        string retStr = "";
        string current = "";
        int smallest = 300;

        for(int i = 0; i < strs.Length; i++){
            if(strs[i].Length < smallest){
                smallest = strs[i].Length;
            }
        }
        if(strs[0] == ""){
            return "";
        }

        for(int i = 0; i < smallest; i++){
            current += strs[0][i];
            for(int j = 0; j < strs.Length; j++){
                if(strs[j][i] != current[i]){
                    return retStr;
                }
            }
            retStr += strs[0][i];
        }
        return retStr;
    }
}