const removeFromArray = function(array = [], ...removeValues) {
    
    function checkValue (value){
        return !removeValues.includes(value);
    }
    return array.filter(checkValue);
};

// Do not edit below this line
module.exports = removeFromArray;
