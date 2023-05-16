/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let array = [];

    //Make one big array for the 2 arrays
    for(let i = 0; i < nums1.length; i++){
        array.push(nums1[i]);
    }
    for(let i = 0; i < nums2.length; i++){
        array.push(nums2[i]);
    }

    //Sort it properly
    array.sort(function(a,b){return a - b});

    //Get average of middle elements
    if((array.length % 2) == 0){
        return(((array[array.length / 2]) + (array[(array.length / 2) - 1])) / 2)
    }

    //Just get the middle
    else if(array.length == 1){
        return(array[0]);
    }
    else{
        let retval = array[parseInt(array.length / 2)];
        return(retval);
    }
};