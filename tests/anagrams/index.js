// Search the anagrams = words with the same characters and same length.
// return the first anagram.

const DATA = ['code', 'doce', 'ecode', 'frames', 'aaframe', 'amefraa','anagrams', 'raangams']

const getFirstAnanagrams = (textArray) => {
    const doesHaveSameLetters = (string1, string2) => {
        const string1Array = string1.split('')
        let string2Array = string2.split('')
            if (string1.length !== string2.length) return false
    
        let result = []
        string1Array.forEach(letter => {
            const indexFound = string2Array.indexOf(letter)
            if ( indexFound !== -1) {
                string2Array.splice(indexFound, 1)
                result.push(true)
            } else {
                result.push(false)
            }
        });
        return result.includes(false) ? false : true
    }
    //end does have the same letters function

    const arrayWithAnanagrams = textArray.map((word, index, array) => {
        return array.map((word2, index2) => {
            if (index === index2) return {}
            return {
                word,
                word2,
                indexMatch: doesHaveSameLetters(word, word2) ? index : -1
            }
        }).filter(values => values.word && values.indexMatch !== -1)
    })

    const filledArrays = arrayWithAnanagrams.filter(value => value.length > 0).flat()

    return filledArrays.map(({ word, indexMatch }, index, array) => {
        return array.map((wordToCompare, index2) => {
            const lowestIndex = indexMatch < wordToCompare.indexMatch ? indexMatch : wordToCompare.indexMatch
            if (index2 === index) return ''
            if (word === wordToCompare.word || word === wordToCompare.word2) return indexMatch === lowestIndex && word
        }).flat().filter(value => value !== false)
    }).flat().filter(value => value !== undefined && value !== '')
}




console.debug(getFirstAnanagrams(DATA))