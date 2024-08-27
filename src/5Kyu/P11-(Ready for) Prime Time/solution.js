// We need prime numbers and we need them now!

// Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

// For example,

// 11 => [2, 3, 5, 7, 11]
function prime(num) {
    let i, count=0;
    let arr = []
    if(num == 0 || num ==1){
      return arr
    }
    else if(num == 2){
      arr.push(2)
      return arr
    }
    else{
      arr.push(2)
      for(i=3;i<=num;i++){
        for(j=2;j<i;j++){
          if(i%j==0){
            count++
          }
        }
        if(count==0){
          arr.push(i)
        }
        count=0
      }
    }
    return arr;
    
  }