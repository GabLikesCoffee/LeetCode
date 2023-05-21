/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxVol = 0;
    let left = 0;
    let right = height.length-1;
    while(left < right){

        length = height[left] > height[right] ? height[right] : height[left];
        distance = Math.abs(left - right);
        let volume = length * distance;
        if (volume > maxVol){
            maxVol = volume;
        }
        height[left] > height[right] ? right-- : left++;
    }
    console.log(height);
    return maxVol;
};
    