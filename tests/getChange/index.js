/**
 * Given an input 5, 1. Should return the quantity of coins.
 * [0.01, 0.05, 0.10, 0.25, 0.50, 1.00]
 *
 * on This example is [0,0,0,0,0,1].
 * Also it must return the least number of coins possible. 
 */


export const getChange = (input, price) => {
    if (input < price) return 'input wrong'
    const valueToReturn = (input - price)
    console.log({valueToReturn})

    const result = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    }

    // Coins to be returned cannot be fractionated number. Forcing to return integer number of coins possible, any other case the number is 0
    const getCoinsNumberForChange = (changeValue, coin) => ((changeValue / coin) - ((changeValue / coin) % 1))

    let res = valueToReturn

    const array = [0.01, 0.05, 0.10, 0.25, 0.50, 1.00].reverse()

    array.forEach((value, index) => {

        const coinsNumber = getCoinsNumberForChange(res, value)

        if (res <= 0) return
        if (coinsNumber > 0 ) {
            result[index] = coinsNumber
            res = (res - (coinsNumber * value))
        }
    })

    return Object.entries(result).map(([_, value]) => value).reverse()
}
console.log(getChange(7.78, 1.00))