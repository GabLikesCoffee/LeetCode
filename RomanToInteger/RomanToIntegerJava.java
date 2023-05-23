class Solution {
    public int romanToInt(String s) {
        int sum = 0;
        for(int i = 0; i < s.length(); i++){
            if(s.charAt(i) == 'M' && i-1 >= 0 && s.charAt(i-1) == 'C'){
                continue;
            }
            else if (s.charAt(i) == 'M'){
                sum += 1000;
            }

            else if(s.charAt(i) == 'D' && i-1 >= 0 && s.charAt(i-1) == 'C'){
                continue;
            }
            else if(s.charAt(i) == 'D'){
                sum += 500;
            }

            else if(s.charAt(i) == 'C' && i+1 != s.length() && s.charAt(i+1) == 'M'){
                sum += 900;
            }
            else if(s.charAt(i) == 'C' && i+1 != s.length() && s.charAt(i+1) == 'D'){
                sum += 400;
            }
            else if(s.charAt(i) == 'C' && i-1 >= 0 && s.charAt(i-1) == 'X'){
                continue;
            }
            else if(s.charAt(i) == 'C'){
                sum += 100;
            }

            else if(s.charAt(i) == 'L' && i-1 >= 0 && s.charAt(i-1) == 'X'){
                continue;
            }
            else if(s.charAt(i) == 'L'){
                sum += 50;
            }

            else if(s.charAt(i) == 'X' && i+1 != s.length() && s.charAt(i+1) == 'C'){
                sum += 90;
            }
            else if(s.charAt(i) == 'X' && i+1 != s.length() && s.charAt(i+1) == 'L'){
                sum += 40;
            }
            else if(s.charAt(i) == 'X' && i-1 >= 0 && s.charAt(i-1) == 'I'){
                continue;
            }
            else if(s.charAt(i) == 'X'){
                sum += 10;
            }

            else if(s.charAt(i) == 'V' && i-1 >= 0 && s.charAt(i-1) == 'I'){
                continue;
            }
            else if(s.charAt(i) == 'V'){
                sum += 5;
            }

            else if(s.charAt(i) == 'I' && i+1 != s.length() && s.charAt(i+1) == 'X'){
                sum += 9;
            }
            else if(s.charAt(i) == 'I' && i+1 != s.length() && s.charAt(i+1) == 'V'){
                sum += 4;
            }
            else if(s.charAt(i) == 'I'){
                sum += 1;
            }
        }
        return sum;
    }
}