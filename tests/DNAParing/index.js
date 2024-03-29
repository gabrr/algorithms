// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
    const pairs = {
      "A": ["A", "T"],
      "T": ["T", "A"],
      "G": ["G", "C"],
      "C": ["C", "G"],
    }
  
    const result = []
  
    str.split('').forEach(letter => {
      result.push(pairs[letter])
    })
  
    return result;
  }
  
  pairElement("GCG");


// Someone's else code, much cleaner than mine. But I solved mine in 3 min.
function pairElement(str) {
    //create object for pair lookup
    var pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x, pairs[x]]);
  }
  
  //test here
  pairElement("GCG");
  