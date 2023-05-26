/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(stack.length == 0 && (s.charAt(i) == "(" || s.charAt(i) == "{" || s.charAt(i) == "[")){
            stack.push(s.charAt(i));
        }
        else if(stack.length == 0){
            return false;
        }
        else if(s.charAt(i) == "(" || s.charAt(i) == "{" || s.charAt(i) == "["){
            stack.push(s.charAt(i));
        }
        else{
            if((s.charAt(i) == ")" && stack[stack.length-1] == "(") || (s.charAt(i) == "]" && stack[stack.length-1] == "[") || (s.charAt(i) == "}" && stack[stack.length-1] == "{")){
                stack.pop();
            }
            else{
                return false;
            }
        }
    }
    if(stack.length == 0){
        return true;
    }
    return false;
};