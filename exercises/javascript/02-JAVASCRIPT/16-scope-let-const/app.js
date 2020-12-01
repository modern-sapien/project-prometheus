// Scope
// var = function scope
var a = 1;
// let & const = block level scope
let b = 2;
const c = 3;

function scopeTest()    {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`Function scope  ${a} ${b} ${c}`)
}

// scopeTest()

// if (true)   {
//     // block scope
//     // VAR here will reassign the global value even though it is within an IF block
//     // LET and const are not reassigned a value here
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log(`IF scope  ${a} ${b} ${c}`)
// }

for (var a = 0; a < 10; a++)    {
    console.log(`Loop: ${a}`)
}



console.log(`Global scope  ${a} ${b} ${c}`)