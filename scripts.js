/*Variable*/
let entry = [];

const specialKeys = ['+', '-', '*', '/', '.']
let a = null;
let b = null;
let oper = null;

/*Selectors*/
const keys = document.querySelectorAll('button');
const divScreen = document.querySelector('#screen');
const divEntry = document.querySelector('#entry');

const testOne = document.querySelector('#testone');


/*Scratch Pad*/
//entry = ['(', '1', '+', '5', ')'];
//entry1 = ['2', '/', '0'];
//entry2 = ['2', '+', '14', '-', '95', '/', '8', '*', '2', '+', '5'];
expression = ['(', '2', '+', '140', '-', '95', '/', '1', '*', '2', '+', '5', ')', '+', '(', '8', '+', '99', ')'];

//console.log(calculateArithmatic(entry2));
//console.log('-');
console.log(evaluateExpression(expression));


/*Listeners*/
keys.forEach( (key) => key.addEventListener('click', keyHandler));


/*Handlers*/
function keyHandler(e) {

    const currentKey = e.target.dataset.key

    //console.log(specialKeys.includes(currentKey));
    if (currentKey === '=') {
        entry = divEntry.textContent.split(/([\(+\-*/])/g)

        //console.log(calculateArithmatic(entry))
        console.log(entry)
        divScreen.textContent = calculateArithmatic(entry);


    } else if (specialKeys.includes(currentKey)) {

            const lastKey = divEntry.textContent[divEntry.textContent.length - 1];

            if (lastKey === undefined) { //won't allow the first element in the entry to be a special charecter
                null;
                    
            } else if (!specialKeys.includes(lastKey)) {
                divEntry.textContent += currentKey;
            }

    } else if (currentKey === 'c') {
        divEntry.textContent = '';

    } else {
        divEntry.textContent += currentKey;
    }
}   

/*Function Definitions*/
function evaluateExpression(expression) {
    let evaluating = true;

    //Error check.  Verify there are the same number of ( and )

    while (evaluating) {
        const leftParen = expression.findIndex((element) => element === '(');
        const rightParen = expression.findIndex((element) => element === ')');

        if(leftParen === undefined || leftParen === -1 ) {
            evaluating = false;
        } else {
            const ans = calculateArithmatic(expression.slice(leftParen + 1, rightParen))

            expression[leftParen] = ans;
            expression.splice(leftParen + 1, (rightParen - leftParen));
        }
        
    }

    expression = calculateArithmatic(expression);

    return expression;
}



function calcSingleOperation(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    switch(operator) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            if (num2 === 0) return 'undefined'
            return num1 / num2;
            break;
        default:
            return 'error';
    }
}

function calculateArithmatic(equation) {
    //Order of operation
    calcMultipleOperations('*', equation);
    calcMultipleOperations('/', equation);
    calcMultipleOperations('+', equation);
    calcMultipleOperations('-', equation);

    return (equation);

}

function calcMultipleOperations (oper, equation) {
    let working = true;

    while (working) {

        const target = equation.findIndex( (element) => element === oper);

        if (target === undefined || target === -1) {
            
            working = false;
        } else {
            const ans = calcSingleOperation(oper, equation[target - 1], equation[ target + 1]);
            equation[target - 1] = ans;
            equation.splice(target, 2);
        }
    }

    return equation;
}

