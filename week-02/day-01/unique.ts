//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

//  Example
//console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`
let numbers:number[] = [1, 11, 34, 11, 52, 61, 1, 34];


function unique(arr:number[]) {
  let uniquieList:number [] = [];       //This is a list outside the loop wich we retunr at the end of the function
  for (let i:number = 0; i < arr.length; i++){        //go throut elements of arr[i]
    for (let j:number = uniquieList.length; j >= 0; j--) {     //Go trhout elements of the uniuniquieList
      if (arr[i] !== uniquieList[j] && arr[i] !== uniquieList [uniquieList.length -1 ]) { //If the arrys element value [i] is not equial to the unique list item
        uniquieList.push(arr[i]);            // .push the arrays [element] value on the uniq list
      } 
       
      console.log ('The _J is:  ' + j + 'The i is' + i) 
    }

  } 
  console.log ('The list is:  '+ uniquieList)
}

console.log (unique(numbers));