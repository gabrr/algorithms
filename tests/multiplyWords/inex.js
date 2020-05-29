function repeatStringNumTimes(str, num) {
    // repeat after me
    let strModified = ""
    const newStr = (num) => {
        if (num <= 0) {
            return newStr
        } else {
            strModified += str
            return newStr(num - 1)
        }
    }
    newStr(num)
    return strModified;
}

repeatStringNumTimes("abc", 3);