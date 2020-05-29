/**
This code is about to get a number of times which the interaction is gonna happen and then
make the first number goes to the last index. 
**/
function toLeft(a, b) {
    if (a <= 0) {
        console.log(b)
    } else {

        b.push(b.shift());
        a--;
        toLeft(a, b);
    }

}

// toLeft(4, [1, 2, 3, 4, 5]);