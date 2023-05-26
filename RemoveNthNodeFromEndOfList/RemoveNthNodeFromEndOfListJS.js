/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let current = head;
    let nbehind = head;
    let nfront = head;
    let list = new ListNode();
    let ret = list;
    let never = true;

    let i = 1;
    while( current.next ){
        
        if(i > n){
            list.next = new ListNode(nbehind.val);
            list = list.next;
            never = false;
  
            nbehind = nbehind.next;
            if(!current.next.next){
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
        console.log("f");
        return nfront;
    }

    if(nbehind.next){
        if(i != 1 && nbehind.next != current){
            list.next = nfront;
        }
    }

    return ret.next;
};