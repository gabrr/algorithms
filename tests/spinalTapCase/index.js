//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
    return str.split(/(?=[A-Z])|[_]|[\s]/).join('-').toLowerCase();
}
  
spinalCase('This Is Spinal Tap');

// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// Passed
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// Passed
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// Passed
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".