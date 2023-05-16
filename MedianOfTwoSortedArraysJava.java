class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {

        //Sum of the length of both arrays
        int sum = 0;
        sum += nums1.length;
        sum += nums2.length;

        //Make a new array for containing all elements of both arrays
        Integer[] array = new Integer[sum];
        
        //Index for filling the new array
        int index = 0;
        
        //Don't increment the index if nums1 is empty
        if(nums1.length == 0){
            index = -1;
        }

        //Fill the array with nums1
        for(int i = 0; i < nums1.length; i++){
            index = i;
            array[index] = nums1[i];
        }

        //Fill the array with nums2
        for(int i = 0; i < nums2.length; i++){
            index++;
            array[index] = nums2[i];
        }

        //Sort the array
        Arrays.sort(array);

        //Return the average of the middle elements
        if(array.length % 2 == 0){
            double average = (array[array.length / 2] + array[(array.length / 2) - 1]) / 2.0;
            return average;
        }
        
        //Just return the middle element
        else if(array.length == 1){
            return(array[0]);
        }
        else{
            return (array[array.length/2]);
        }
    }
}