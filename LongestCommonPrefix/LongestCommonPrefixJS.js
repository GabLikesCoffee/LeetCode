/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let retStr = "";
    let current = "";
    let smallest = 300;

    for(let i = 0; i < strs.length; i++){
        if(strs[i].length < smallest){
            smallest = strs[i].length;
        }
    }
    if(strs[0] == ""){
        return "";
    }

    for(let i = 0; i < smallest; i++){
        current += strs[0].charAt(i);
        for(let j = 0; j < strs.length; j++){
            if(strs[j].charAt(i) != current.charAt(i)){
                return retStr;
            }
        }
        retStr += strs[0].charAt(i);
    }
    return retStr;
};