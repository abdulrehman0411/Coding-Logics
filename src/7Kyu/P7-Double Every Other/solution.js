// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// [1,2,3,4]
// the function should return :

// [1,4,3,8]

function doubleEveryOther(a) {
    let i;
    for(i=0;i<a.length;i+=2)
      {
        a[i+1]=a[i+1]+a[i+1];
      }
    return a;
  }