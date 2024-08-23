// Digitwise Addition
// Digitwise addition is a special kind of addition where instead of adding 1 normally to the number, it adds 1 to every digit of that number. If the digit is a 9, we replace it with a 10 without carrying over to the next digit.

// Examples
// 123 -> 234
// 910 -> 1021
// 789 -> 8910
// Task
// Program a function that takes two numbers, n and k, and outputs the number of digits in n after applying Digitwise addition k times. Since the answer can be very large, return the answer modulo 1_000_000_007.
// Your solution is expected to be O(klogn).
// Examples
// (9812, 2) -> 6
// # Explanation:
// # 9812 -> 10923 -> 211034 -> 6 digits
// (9899, 3) -> 8
// # Explanation:
// # 9899 -> 1091010 -> 21102121 -> 32213232 -> 8 digits


function digitwiseAddition(N, K) {
    let i, myFunc, number;
    let intArr;
  myFunc = num => Number(num);
  intArr = Array.from(String(N), myFunc);
    for(i=0;i<K;i++){
        for(j=0;j<intArr.length;j++)
      {
          intArr[j]=intArr[j]+1;
         
      }
        intArr = intArr.join("") 
        intArr = Number(intArr)
      myFunc = num => Number(num);
       intArr = Array.from(String(intArr), myFunc); 
      
    }
    return intArr.length
  }