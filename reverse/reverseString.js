const reVerseString = (string) => {
    let arr = string.split("");
    let reversed = arr.reverse().join("");
    console.log(reversed);
    return reversed
}


export default reVerseString;