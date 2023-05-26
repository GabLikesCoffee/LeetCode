/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* current = head;
        ListNode* nbehind = head;
        ListNode* nfront = head;
        ListNode* list = new ListNode();
        ListNode* ret = list;
        bool never = true;

        int i = 1;
        while( current->next != nullptr ){
            
            if(i > n){
                list->next = new ListNode(nbehind->val);
                list = list->next;
                never = false;
    
                nbehind = nbehind->next;
                if(current->next->next == nullptr){
                    list->next = new ListNode(nbehind->val);
                    list = list->next;
                }
            }
            if(i >= n-1){
                nfront = nfront->next;

            }
            current = current->next;
            i++;
        }
        if(i > n && never == true){
                list->next = new ListNode(nbehind->val);
                list = list->next;
        }
        else if(never == true && i != 1){
            return nfront;
        }

        if(nbehind->next != nullptr){
            if(i != 1 && nbehind->next != current){
                list->next = nfront;
            }
        }

        return ret->next;
    }
};