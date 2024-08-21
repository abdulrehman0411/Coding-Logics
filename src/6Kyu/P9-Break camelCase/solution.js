
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
function solution(string) {
    let array = string.split("");
    let farray = "";
    let i;
    for(i=0;i<array.length;i++)
    {
        if(array[i].charCodeAt(0)>=65 && array[i].charCodeAt(0)<=90)
        {
          farray+=" "
          farray+=array[i]
        }
        else {
          farray+=array[i];
        }  
    }
   return farray
  }