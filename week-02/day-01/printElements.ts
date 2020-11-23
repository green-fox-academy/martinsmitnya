// -  Create a variable named `numbers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `numbers` to the console*
// *hint: use a loop, console.log(numbers) won't cut it
// -  bonus for using the correct built in array method

let numbers: number[] = [4, 5, 6, 7];             //for loop solution
for (let i:number = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}

numbers.forEach(function printable(i) {     //I call the .forEach on my array and execute my own made up function
  console.log(i);
});
