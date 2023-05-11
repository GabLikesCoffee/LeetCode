class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] array = new int[2];
        for(int i = 0; i < nums.length; i++){
            for(int j = i+1; j < nums.length; j++){
                if(i == j){
                    continue;
                }
                if(nums[i] + nums[j] == target){
                    array = new int[]{i, j};
                    return(array);
                }
            }
        }
        return array;
    }
}