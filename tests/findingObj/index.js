//first parameter is the array conataining objects and the second parameter
//indicates the key and value, that the object we are looking for has.
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    collection.forEach(v => {
        for (let i in v) {
            JSON.stringify({
                [i]: v[i] }) === JSON.stringify(source) ? arr.push(v) : false
        }
    })

    return arr
        // Only change code above this line
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { first: "Romeo" }));


//returns [ { first: 'Romeo', last: 'Montague' } ]