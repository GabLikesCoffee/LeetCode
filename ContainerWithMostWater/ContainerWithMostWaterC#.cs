public class Solution {
    public int MaxArea(int[] height) {
    int maxVol = 0;
    int left = 0;
    int right = height.Length-1;

    while(left < right){
        int length;
        if(height[left] > height[right]){
            length = height[right];
        } else{
            length = height[left];
        }
        int distance = Math.Abs(left - right);
        int volume = length * distance;
        if (volume > maxVol){
            maxVol = volume;
        }
        if(height[left] > height[right]){
            right--;
        }else{
            left++;
        }
    }
    return maxVol;
    }
}