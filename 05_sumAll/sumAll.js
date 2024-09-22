const sumAll = function(value1, value2) {
    if ((value1 < 0 || !typeof value1 === Number || !Number.isInteger(value1) ||
         value2 < 0 || !typeof value2 === Number || !Number.isInteger(value2)))
    {
        return 'ERROR';
    }

    let startNumber = null;
    let endNumber = null;
    let result = null;

    if (value1 > value2){
        startNumber = value2;
        endNumber = value1;
    }

    else if (value2 > value1){
        startNumber = value1;
        endNumber = value2;
    }

    for (let i = startNumber; i <= endNumber; i++){
        result = result + i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
