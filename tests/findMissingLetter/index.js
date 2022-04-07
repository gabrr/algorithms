/**
fearNotLetter("abce") should return the string d.

fearNotLetter("abcdefghjklmno") should return the string i.

fearNotLetter("stvwx") should return the string u.

fearNotLetter("bcdf") should return the string e.

fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined. 
*/

const fearNotLetter = (str) => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
	const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
	const baseIndex = alphabet.findIndex(l => l === str[0])

  for (let i = baseIndex; i < (baseIndex + str.length); i++) {
    if (alphabet[i] !== str[(i - baseIndex)]) return alphabet[i]
  }

	return undefined
}


// really interesting someone's code
function fearNotLetter2(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

exports.test = fearNotLetter("abcdefghjklmno")