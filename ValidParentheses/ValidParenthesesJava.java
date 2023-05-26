class Solution {
    public boolean isValid(String s) {
        String stack = "";
        for(int i = 0; i < s.length(); i++){
            if(stack.length() == 0 && (s.charAt(i) == '(' || s.charAt(i) == '{' || s.charAt(i) == '[')){
                stack+=(s.charAt(i));
            }
            else if(stack.length() == 0){
                return false;
            }
            else if(s.charAt(i) == '(' || s.charAt(i) == '{' || s.charAt(i) == '['){
                stack+=(s.charAt(i));
            }
            else{
                if((s.charAt(i) == ')' && stack.charAt(stack.length()-1) == '(') || (s.charAt(i) == ']' && stack.charAt(stack.length()-1) == '[') || (s.charAt(i) == '}' && stack.charAt(stack.length()-1) == '{')){
                    stack = stack.substring(0, stack.length() - 1);
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
}