

// function AdditionT(x, y){
//     return x + y;

// }
// function SubtractT(x, y){
//     return x - y;

// }
// function multiplyT(x, y){
//     return x * y;

// }


// let result = AdditionT(30, 10);
// let result2 = SubtractT(30, 10);
// let result3 = multiplyT(30, 10);

// document.getElementById(`OutputT`).innerHTML = result;

// console.log(result);
// console.log(result2);
// console.log(result3);



function processString(inputString){

let name = inputString;

const convertedName= name.toLowerCase();

const convertedLenght = name.length;

return {uppercaseString:convertedName, StringLenght: convertedLenght}

}


console.log(processString(`Uche`));




