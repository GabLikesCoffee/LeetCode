class Solution {
public:
    bool isValid(string s) {
        string stack = "";
        for(int i = 0; i < s.length(); i++){
            if(stack.length() == 0 && (s[i] == '(' || s[i] == '{' || s[i] == '[')){
                stack+=(s[i]);
            }
            else if(stack.length() == 0){
                return false;
            }
            else if(s[i] == '(' || s[i] == '{' || s[i] == '['){
                stack+=(s[i]);
            }
            else{
                if((s[i] == ')' && stack[(stack.length()-1)] == '(') || (s[i] == ']' && stack[(stack.length()-1)] == '[') || (s[i] == '}' && stack[(stack.length()-1)] == '{')){
                    stack.erase(stack.length() - 1);
                }
                else{
                    return false;
                }
            }
        }
        if(stack.length() == 0){
            return true;
        }
        return false;
    }
};