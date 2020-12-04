/*Given a string, compute recursively (no loops) a new string where 
all the lowercase 'x' chars have been changed to 'y' chars.*/

/*
function tellMeY(convert:string){
  let arr: string[] = convert.split('');
  let converted: string = '';
  for (let i:number = 0; i<arr.length; i++){
    if (arr[i] === 'x') {
      converted +='y'
    }else {
      converted += arr[i];
    } 
  }
  return converted
}

console.log(tellMeY('Anx strings guxs'));
*/


function tellMeYAgain(convert: string) {
  let arr: string[] = convert.split('');
  if (arr.length < 2) {
    if (arr[arr.length - 1] === 'x') {
      return 'y';
    } else {
      return arr[arr.length - 1];
    }

  }
  //Add the first character AND decreese the length of the array
  else {
    if (arr[0] === 'x') {
      return 'y' + tellMeYAgain(convert.slice(1))
    } else {
      return arr[0] + tellMeYAgain(convert.slice(1))
    }

  }

}

console.log(tellMeYAgain('hello guxz'));