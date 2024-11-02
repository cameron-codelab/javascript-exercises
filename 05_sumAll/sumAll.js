const sumAll = function(value1, value2) {

    let sum = 0;
    let min = value1
    let max = value2

    if (value1<0 || value2<0){
        return 'ERROR'
    }

    if(!Number.isInteger(value1) || !Number.isInteger(value2)){
        return 'ERROR'
    }

    if (isNaN(value1) || isNaN(value2)){
        return 'ERROR'
    }

    if(value1 > value2){
        min = value2
        max = value1
    }


    for (let i = min; i <= max; i++) {
        sum = sum + i;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
