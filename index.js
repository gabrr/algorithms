const express = require('express')
const app = express()
const path = require('path')
app.use(express.static('public'))

// //  Definition for singly-linked list.
//   function ListNode(val, next) {
//       this.val = (val===undefined ? 0 : val)
//       this.next = (next===undefined ? null : next)
//   }
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
//  var reverseList = function(head) {
    
//     console.log(head)

// };

// reverseList(ListNode([1,2,3,4,5]))


// in 3 min
const initials = (string = '') => typeof string === 'string' ? (() => string.trim().split(' ').map((name) => name[0]).join('').toUpperCase())() : ''

// in 15 min
const initials2 = (string = '') => {
  if (typeof string !== 'string') return ''

  return string.trim().split(/\s/).map((name, index) => (index === 0 || index === 1) && name[0]).filter(name => !!name).join('').toUpperCase()
}


console.log(initials2("Elon Reeve Musk")) // ER
console.log(initials2("Bill Gates")), // BG
console.log(initials2("Maddona")), // M
console.log(initials2("Tim Berners-Lee")), // TB
console.log(initials2 ()), //
console.log(initials2 ("Mark Elliot Zuckerberg")), // MZ
console.log(initials2 ("João Leite Ferreira")), // JLF




app.get('/', (req, res) => res.sendFile(path.join(__dirname, "public/index.html")))
app.listen(3000, () => console.log(`App is running on port: 3000`))