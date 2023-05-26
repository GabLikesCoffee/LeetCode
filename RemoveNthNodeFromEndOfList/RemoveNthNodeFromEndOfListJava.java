/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode current = head;
        ListNode nbehind = head;
        ListNode nfront = head;
        ListNode list = new ListNode();
        ListNode ret = list;
        boolean never = true;

        int i = 1;
        while( current.next != null ){
            
            if(i > n){
                list.next = new ListNode(nbehind.val);
                list = list.next;
                never = false;
    
                nbehind = nbehind.next;
                if(current.next.next == null){
                    list.next = new ListNode(nbehind.val);
                    list = list.next;
                }
            }
            if(i >= n-1){
                nfront = nfront.next;

            }
            current = current.next;
            i++;
        }
        if(i > n && never == true){
                list.next = new ListNode(nbehind.val);
                list = list.next;
        }
        else if(never == true && i != 1){
            return nfront;
        }

        if(nbehind.next != null){
            if(i != 1 && nbehind.next != current){
                list.next = nfront;
            }
        }

        return ret.next;
    }
}