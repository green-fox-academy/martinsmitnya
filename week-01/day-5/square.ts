// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
let lineCount: number = 6;


//TOP
let answer: string = '';
for (let i:number = 0; i < lineCount; i++) {
    answer = answer + '% ';
}
console.log(answer);

//CENTER
for (let j:number = 0; j < lineCount-2; j++) {     //Goes down vertically
    console.log('.')
}


//BOTTOM
let answer: string = '';
for (let l:number = 0; l < lineCount; l++) {
    answer = answer + '% ';
}
console.log(answer);