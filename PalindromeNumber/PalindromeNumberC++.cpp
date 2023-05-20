class Solution {
public:
    bool isPalindrome(int x) {
         std::string reverse = std::to_string(x);
         std::string normal = reverse;

         std::reverse(reverse.begin(), reverse.end());

         if(normal == reverse){
             return true;
         }
         else{
             return false;
         }

    }
};