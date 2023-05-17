class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        vector<int> array;
        for (auto i = nums1.begin(); i != nums1.end(); ++i){
            array.push_back(*i);
        }
        for (auto i = nums2.begin(); i != nums2.end(); ++i){
            array.push_back(*i);
        }

        sort(array.begin(), array.end());

        for (auto num : array) {
            cout << num << " ";
        }

        if(array.size() % 2 == 0){
            double average = (array.at(array.size() / 2) + array.at((array.size() / 2)-1)) / 2.0;
            return average;

        }

        else if(array.size() == 1){
            return array.at(0);
        }
        else{
            return array.at(array.size() / 2);
        }
        return 0.0;
    }
};