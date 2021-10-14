console.log("Hello World!")

/*Variable*/
let entry = [];

/*Selectors*/
const keys = document.querySelectorAll('button');
const divScreen = document.querySelector('#screen');
const divEntry = document.querySelector('#entry');

const testOne = document.querySelector('#testone');


/*Listeners*/
keys.forEach( (key) => key.addEventListener('click', keyHandler));

testOne.addEventListener('click', () => {
    entry = ['(', '1', '+', '5', ')'];
    divEntry.textContent = entry.join('');
})

/*Function Definitions*/
function keyHandler(e) {
    //console.log(e);
    //console.log(e.target.dataset.key);

    const currentKey = e.target.dataset.key

   if (currentKey === 'b') {
       entry.pop();

   } else if (currentKey === 'c') {
       entry = [];

   } else if (currentKey === 'sqrt') {
       const symbol = 'sqrt(';
       if (entry[entry.length - 1] !== symbol) entry.push(symbol);
        
   } else if (currentKey === 'pow2') {
       const symbol = "^2";
       if (entry[entry.length - 1] !== symbol) entry.push(symbol);

   } else if (currentKey === '=') {
       console.log(entry[entry.length - 1]);

   } else if (currentKey === '.'
                || currentKey === '+'
                || currentKey === '-'
                || currentKey === '*'
                || currentKey === '/') {
        if (entry[entry.length - 1] !== currentKey) entry.push(currentKey);
            
    } else if (currentKey === '=') {
        evaluate();

    } else {
        entry.push(currentKey);
   }

    divEntry.textContent = entry.join('');

}

function evaluate() {
    //Do the parenthesis

    //Error check for the 

    //Search for the first '('
    entry.forEach( element => {
        if (element === '(') {
            console.log(indexOf(element))
        }
    })
}



/*TDD Exports*/
module.exports = helloWorld;





//Attach the listener to the array of buttons
//keysArray



//Handler
//Add the content of the key to the entry string
//Add some special hanndlers for the special keys)


//Make an enter function that tries to evaluate the function?

//Temp holder
/* Scratch pad
//Convert from nodelist to array so we have acess to all methods
const keysArray = Array.from(keys);
console.log(keysArray);

console.log(keysArray[0].dataset.key)
*/
