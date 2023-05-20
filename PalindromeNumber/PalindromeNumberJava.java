class Solution {
    public boolean isPalindrome(int x) {
        String normal = String.valueOf(x);
        StringBuilder reverse = new StringBuilder(normal);
        reverse = reverse.reverse();
        String reversed = reverse.toString();

        if(normal.compareTo(reversed) == 0){
            return true;
        }
        else{
            System.out.println(reversed + " " + normal);
            return false; 
        }
    }
}