//Longest Substring without repeating characters
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        string retval;
        int max = 0;

        for(int i = 0; i < s.size(); i++){
            for(int j = 0; j < retval.size(); j++){
                if(s[i] == retval[j]){
                    if(retval.size() > max){
                        max = retval.size();
                    }
                    size_t pos = retval.find(s[i]);
                    if (pos != std::string::npos) {
                        retval.erase(0, pos+1);
                    }
                }
            }
            retval += s[i];
        }
        
        if(retval.size() > max){
            max = retval.size();
        }
        return max;
    }
};