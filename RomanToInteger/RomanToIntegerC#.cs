public class Solution {
    public int RomanToInt(string s) {

        int sum = 0;
        for(int i = 0; i < s.Length; i++){
            if(s[i] == 'M' && i-1 >= 0 && s[i-1] == 'C'){
                continue;
            }
            else if (s[i] == 'M'){
                sum += 1000;
            }

            else if(s[i] == 'D' && i-1 >= 0 && s[i-1] == 'C'){
                continue;
            }
            else if(s[i] == 'D'){
                sum += 500;
            }

            else if(s[i] == 'C' && i+1 != s.Length && s[i+1] == 'M'){
                sum += 900;
            }
            else if(s[i] == 'C' && i+1 != s.Length && s[i+1] == 'D'){
                sum += 400;
            }
            else if(s[i] == 'C' && i-1 >= 0 && s[i-1] == 'X'){
                continue;
            }
            else if(s[i] == 'C'){
                sum += 100;
            }

            else if(s[i] == 'L' && i-1 >= 0 && s[i-1] == 'X'){
                continue;
            }
            else if(s[i] == 'L'){
                sum += 50;
            }

            else if(s[i] == 'X' && i+1 != s.Length && s[i+1] == 'C'){
                sum += 90;
            }
            else if(s[i] == 'X' && i+1 != s.Length && s[i+1] == 'L'){
                sum += 40;
            }
            else if(s[i] == 'X' && i-1 >= 0 && s[i-1] == 'I'){
                continue;
            }
            else if(s[i] == 'X'){
                sum += 10;
            }

            else if(s[i] == 'V' && i-1 >= 0 && s[i-1] == 'I'){
                continue;
            }
            else if(s[i] == 'V'){
                sum += 5;
            }

            else if(s[i] == 'I' && i+1 != s.Length && s[i+1] == 'X'){
                sum += 9;
            }
            else if(s[i] == 'I' && i+1 != s.Length && s[i+1] == 'V'){
                sum += 4;
            }
            else if(s[i] == 'I'){
                sum += 1;
            }
        }
        return sum;
        
    }
}