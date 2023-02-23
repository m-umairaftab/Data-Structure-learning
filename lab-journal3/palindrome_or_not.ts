export{}

function checkPalindrome(string : string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
const ts: any = require('fs')
ts.readFile('palindrome.txt', 'utf-8', (err: any, data: any) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(checkPalindrome(data));
    
})