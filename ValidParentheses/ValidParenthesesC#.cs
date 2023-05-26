public class Solution {
    public bool IsValid(string s) {
        string stack = "";
        for(int i = 0; i < s.Length; i++){
            if(stack.Length == 0 && (s[i] == '(' || s[i] == '{' || s[i] == '[')){
                stack+=(s[i]);
            }
            else if(stack.Length == 0){
                return false;
            }
            else if(s[i] == '(' || s[i] == '{' || s[i] == '['){
                stack+=(s[i]);
            }
            else{
                if((s[i] == ')' && stack[(stack.Length-1)] == '(') || (s[i] == ']' && stack[(stack.Length-1)] == '[') || (s[i] == '}' && stack[(stack.Length-1)] == '{')){
                    stack = stack.Remove(stack.Length - 1);
                }
                else{
                    return false;
                }
            }
        }
        if(stack.Length == 0){
            return true;
        }
        return false;
    }
}