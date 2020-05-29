function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    let splitted = str.split("")
    let splittedTarget = target.split("")

    let sSize = splitted.length - 1
    let tSize = splittedTarget.length - 1

    const res = (s, t, num) => {
        if (num < 0) {
            return true
        } else if (t[tSize] !== s[sSize]) {
            return false
        } else {
            tSize -= 1
            sSize -= 1
            return res(splitted, splittedTarget, num - 1)
        }
    }

    return res(splitted, splittedTarget, tSize)
}

confirmEnding("Bastian", "");

// var totn_string = 'TechOnTheNet';
// console.log(totn_string.endsWith('Net')
//   This code checks if the target(set in the parameter) is equal to the final of the string
// THIS IS AN ALTERNATIVE TO