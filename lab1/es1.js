'use strict';

const words = ["spring","summer", "a", "ab", "abc", "autumn","winter"];

function resizeString(str) {
    let newStr;
    if(str.length < 2)
        newStr = "";
    else 
        newStr =  str.substring(0,2) + str.substring(str.length -2,  str.length);
    return newStr;
}

for(let i=0; i< words.length; i ++) {
    let str = resizeString(words[i]);
    console.log(str); 
}