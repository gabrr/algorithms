class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedList = new ListNode(2);
linkedList.next = new ListNode(4);
linkedList.next.next = new ListNode(6);
linkedList.next.next.next = new ListNode(8);
linkedList.next.next.next.next = new ListNode(10);

//2 > 4 > 6 > 8 > 10 > null;
//null < 2 < 4 < 6 < 8 < 10;

//2 > null;
//4 > 2;
//6 > 4;
//8 > 6;
//10 > 8;
//// 10 has no next so it stops.

///**
// * @param {ListNode} head
// * @return {ListNode}
// */
function solution(head = linkedList) {
  let prev = null;
  let current = head;

  while (current !== null) {
    //find the next
    const next = head.next;

    //modify the next to the previous
    current.next = prev;

    //save that change
    prev = current;

    //restore the state and update with the next value.
    current = next;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function solution(head = linkedList, current) {
  if (head === null) {
    return current;
  }

  const nextNode = head.next;
  head.next = current;

  return solution(nextNode, head);
}

exports.solution = solution;
