// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
Description:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    // ...
  let min = 0;
  let max = 0;
  let i =0;
  let final;
  let num = numbers.split(" ").map(Number);
  
  max = num[0];
  min = num[0];
  
    for(i=0; i<num.length; i++)
      {
        if(max < num[i+1])
          {
            max = num[i+1];
          }
          
      }
    for(let i=0; i<num.length; i++)
      {
        if(min > num[i+1])
          {
            min = num[i+1];
          }
      }
    final=max + " " + min;
   return final;
  }
  