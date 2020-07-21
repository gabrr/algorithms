function fizzBuzz(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {
        let fz = ((i / 3) % 1 === 0) ? 'Fizz' : ''
        let bz = ((i / 5) % 1 === 0) ? 'Buzz' : ''
        console.log((fz + bz) ? (fz + bz) : i)   
    }
}

//explanation

/**
STDIN    Function
-----    --------
15    →  n = 15

1     
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz


on lines 3 9 12, the numbers are multiply of 3 but not of 5, so we print Fizz
when is multiple of 5 but not 3, print Buzz.
When are multiple of both, print FizzBuzz.




**/
