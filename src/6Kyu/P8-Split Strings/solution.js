// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let i;
   if(str.length&2!=0)
   {
       str=str+"_"
   }
   let array = str.split("");
   let farray = [];
   for(i=0;i<array.length;i++){
       if(i%2!=0)
       {
           farray.push(array[i-1]+array[i]);
       }
   }
   return farray
}
