function diffArray(arr1, arr2) {
    let firstTo = arr1.map((v, i) => {
        return arr2.indexOf(v) === -1 ? v : false
    }).filter(v => v !== false)

    let secondTo = arr2.map((v, i) => {
        return arr1.indexOf(v) === -1 ? v : false
    }).filter(v => v !== false);

    return [...firstTo, ...secondTo]
        // Same, same; but different.
}

console.log(diffArray([1, 2, 3, "hey", 5], [1, "jhon", 2, 3, 5]));


// OUTPUT  ["HEY", "JHON"]