class Solution {
public:
    string convert(string s, int numRows) {

        string retval = "";
        int bounce = 0;
        bool increment = true;

        if(numRows == 1){
            return s;
        }

       std::vector<std::string> array(numRows);

        for(int i = 0; i < s.size(); i++){
            array[bounce].push_back(s[i]);

            if(bounce == 0){
                increment = true;
            }
            else if(bounce == numRows-1){
                increment = false;
            }

            if(increment == true){
                bounce++;
            }
            else{
                bounce--;
            }
            
        }
        for(int i = 0; i < numRows; i++){
            for(int j = 0; j < array[i].size(); j++){
                retval += array[i][j];
            }
        }
        return retval;
    }
};