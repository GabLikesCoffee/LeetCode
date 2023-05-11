class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> retval;
        for (auto i = nums.begin(); i != nums.end(); ++i){
            for (auto j = i + 1; j != nums.end(); ++j){
                if(*i + *j == target){
                    retval.push_back(i - nums.begin());
                    retval.push_back(j - nums.begin());
                    return retval;
                }
            }
         }
         return retval;
    }
};