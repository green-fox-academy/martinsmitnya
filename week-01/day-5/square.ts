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
let answer: string = '';   

//TOP   
for (let i:number = 0; i < lineCount; i++) {
    answer = answer + '%';
}
console.log(answer);

//CENTER
for (let j:number = 0; j < lineCount-2; j++) {     //Goes down vertically
    answer = '';
    answer = answer + '%';                  //Draws left side
    for (let k:number = 0; k < lineCount- 2; k++) {     //Draws empty space
        answer = answer + ' '; 
    }
    answer = answer + '%';   //Draws right side
    console.log(answer);
}

//BOTTOM
answer = '';
for (let l:number = 0; l < lineCount; l++) {
    answer = answer + '%';
}
console.log(answer);