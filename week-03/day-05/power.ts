/*Given base and n that are both 1 or more, 
compute recursively (no loops) the value of base to the n power, 
so powerN(3, 2) is 9 (3 squared).*/

function squared (base, n){
  if (n < 1) {
    return 1;
  }else {
    return base*squared (base, n-1);
  }
}
console.log(squared(2, 3));