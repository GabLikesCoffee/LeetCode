/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let list = new ListNode();
    let ret = list;

    while(list1 || list2){
        if(list1 && list2){
            if(list1.val < list2.val){
                list.next = new ListNode(list1.val);
                list = list.next;
                list1 = list1.next;
            }
            else{
                list.next = new ListNode(list2.val);
                list = list.next;
                list2 = list2.next;
            }
        }
        else if(list1){
            list.next = new ListNode(list1.val);
            list = list.next;
            list1 = list1.next;
        }
        else{
            list.next = new ListNode(list2.val);
            list = list.next;
            list2 = list2.next;
        }
    }
    return ret.next;
};