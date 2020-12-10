// counting how many zeros there's between the intervals
// 7 -> 10  =  there is 1 zero
// 199 -> 201 = there is 3 zeros

const intervals = [
    [7, 28],
    [98, 111],
    [63, 69],
    [10, 201]
]

const zeroCounter = input => {
    input.map(values => {
        const start = values[0]
        const end = values[1]

        let zeroCount = 0

        for (let i = start; i <= end; i++) {

            const zeros = i.toString().match(/0/g)
            zeros ? zeroCount += zeros.length : false
        }

        console.log(zeroCount)

    })
}

zeroCounter(intervals)