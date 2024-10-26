const findTheOldest = function(peopleArr) {
    let oldest = peopleArr.reduce((benchmarkObj, currentObj) => {
        currentYear = new Date().getFullYear();$
        
        benchmarkAge = (benchmarkObj.yearOfDeath || currentYear) - benchmarkObj.yearOfBirth;
        currentAge = (currentObj.yearOfDeath || currentYear) - currentObj.yearOfBirth;
        if (currentAge > benchmarkAge){
            return currentObj;
        }
        return benchmarkObj;
        })
    return oldest;
    };

// Do not edit below this line
module.exports = findTheOldest;
