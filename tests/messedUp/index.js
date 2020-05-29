const string = "This is a string to test"


const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const reverse = (text) => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
        let index = abc.indexOf(text[i]);
        newText += abc[index + 1];
    }

    return newText
}

console.log(reverse(string))