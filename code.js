// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === undefined) {
        return "Hello, World!";
    } else if (input === true) {
        return "Hello, World!";
    } else if (input === false) {
        return "Hello, World!";
    } else if (input.length === 0) {
        return "Hello, World!";
    } else {
        return ("Hello, " + input + "!");
    }
    
    // chain ||(or) if (input === null) || (input === undefined) || (isNaN(input !== true))
    
    // if (input === "Alex") {
    //     return "Hello, Alex!";
    // } else if (input === "Pat") {
    //  return "Hello, Pat!"
    // } else {
    //     return "Hello, Jane!";
    // }
}


function isFive(input){
    if (typeof input === "string") {
        return false;
    } else
     return !isNaN((input));
}

function isVowel (input) {
    if (isNaN(input) !== true){
        return false;
    }
}