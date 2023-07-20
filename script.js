//Take input from user

//declare variable input
let input;

//declare variable convResult
let convResult;

//click event listener
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', alertPrompt));

//declare function to alert prompt
function alertPrompt (e) {
    if(e.srcElement.innerHTML === 'Keycode to Character') {
        input = prompt('Enter your Keycode');
        convResult =  String.fromCharCode(input); 
        console.log(convResult);         
    } else {
        input = prompt('Enter your Character');
        convResult = input.charCodeAt();
    };
    dispResults();
};


//display results
function dispResults() {
    const Result = document.querySelector('.result');

    if(convResult === '\x00') {
        Result.textContent = 'INPUT AGAIN!!!. Your input is invalid!';
    } else {
        Result.textContent = convResult;
    };
    
};


