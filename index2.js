const increaseBtn = document.getElementById(`inandDe`);
const decreaseBtn = document.getElementById(`inandDe1`);
const countEl = document.getElementById(`counter2`)

let counter = 0

function increaseCounter(){
    counter++
    countEl.innerText =counter
}
function decreaseCounter (){
    counter--
    countEl.innerText = counter
}

increaseBtn.addEventListener(`click`, increaseCounter)
decreaseBtn.addEventListener(`click`, decreaseCounter)

// function submitForm (){
// const formName = document.getElementById(`formname`).value;

// const formDate = document.getElementById(`formdate`).value;
// const formEmail = document.getElementById(`Formemail`).value;
// const submiteBtn = document.getElementById(`subBtn`)

// console.log(formName);

// if(formName && formDate && formEmail ){
//     const OutputElement = document.getElementById(`OutputT`);
    
//     const greeting = `${formName} /${formDate}   You have successfully submited `
// }
// else{
//     alert(`Please enter valid details.`)
// }

// submiteBtn.addEventListener(`click`, submitForm);

// }


