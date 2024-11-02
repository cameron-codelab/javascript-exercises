const removeFromArray = function(valueArray, ...removeValues) {

    let newArray = [];

    valueArray.forEach(value => {
        if(!removeValues.includes(value)){
            newArray.push(value);
        }
    })

    return newArray

};

// Do not edit below this line
module.exports = removeFromArray;
