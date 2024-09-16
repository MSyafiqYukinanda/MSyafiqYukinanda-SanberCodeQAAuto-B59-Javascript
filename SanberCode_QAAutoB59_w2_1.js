
const prompt = require('prompt-sync')({sigint: true});

console.log('Square root (for even number) function program');

const num1 = prompt('Enter a number: ');

if (num1>=0){
    if (num1%2 == 0){
        console.log('Square root of',Number(num1),' is :',Math.sqrt(Number(num1)));
        console.log('program completed\n~~~~~~~~~~');
    }else{
        console.log('number is odd (',Number(num1),') \nend program\n~~~~~~~~~~');
    }
} else {
    console.log('number is less than 0 (',Number(num1),') \nend program\n~~~~~~~~~~');
}

