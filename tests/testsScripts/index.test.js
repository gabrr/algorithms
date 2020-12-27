const spinalCase = require('../spinalTapCase/')

// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// Passed
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// Passed
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// Passed
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".

test('should return "this-is-spinal-tap', () => {
    expect(spinalCase('This Is Spinal Tap')).toBe('this-is-spinal-tap')
})

test('should return "this-is-spinal-tap', () => {
    expect(spinalCase('thisIsSpinalTap')).toBe('this-is-spinal-tap')
})

test('should return "this-is-spinal-tap', () => {
    expect(spinalCase('The_Andy_Griffith_Show')).toBe('the-andy-griffith-show')
})

test('should return "this-is-spinal-tap', () => {
    expect(spinalCase('Teletubbies say Eh-oh')).toBe('teletubbies-say-eh-oh')
})