const reverseString = function(string) {

    let reversedString = '';

    for (let i = string.length; i > -1 ; i--){
        reversedString = reversedString.concat(string.charAt(i));
    }

    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
