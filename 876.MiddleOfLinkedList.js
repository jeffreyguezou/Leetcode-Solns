/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let endnode = head;
  let middlenode = head;

  while (endnode != null && endnode.next != null) {
    endnode = endnode.next.next;
    middlenode = middlenode.next;
  }

  return middlenode;
};
