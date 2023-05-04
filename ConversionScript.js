let romanToInt = function(s) {
    let charArray = s.split('');
    let integer = 0;
    const conversionTable = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    for (let i = 0; i < charArray.length; i++){
        if (conversionTable[charArray[i]] < conversionTable[charArray[i+1]]){
            integer -= conversionTable[charArray[i]];
        }
        else{
            integer += conversionTable[charArray[i]];
            
        }
    }
    return integer;
};