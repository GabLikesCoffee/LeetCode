class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string retStr = "";
        string current = "";
        int smallest = 300;

        for(int i = 0; i < strs.size(); i++){
            if(strs.at(i).length() < smallest){
                smallest = strs.at(i).length();
            }
        }
        if(strs.at(0) == ""){
            return "";
        }

        for(int i = 0; i < smallest; i++){
            current += strs.at(0)[i];
            for(int j = 0; j < strs.size(); j++){
                if(strs.at(j)[i] != current[i]){
                    return retStr;
                }
            }
            retStr += strs.at(0)[i];
        }
        return retStr;
    }
};