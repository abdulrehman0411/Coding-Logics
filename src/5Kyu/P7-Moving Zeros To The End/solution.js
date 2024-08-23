// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let i,j,zero;
    let length = arr.length
    let arr2 = [];
  //   let strArr = arr.map(String);
   
    for(i=0;i<length;i++){
      
   
            if(arr[i]===0)
              {
                  zero = arr[i];
                  arr.splice(i, 1);
  //              trArr.splice(i, 1)
                  arr2.push(zero);
                  length--
              // console.log(arr.length);
              }
  
      }
      
      return [...arr, ...arr2];
    }