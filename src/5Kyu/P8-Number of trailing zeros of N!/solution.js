// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// N	Product	N factorial	Trailing zeros
// 6	1*2*3*4*5*6	720	1
// 12	1*2*3*4*5*6*7*8*9*10*11*12	479001600	2
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
function zeros (n) {
    // your code here  
    let i, product;
    let m ,count=0;
    i = BigInt(2)
    product = BigInt(1)
    m=BigInt(n);
    if(n==0 || n==1){
      return 0
    }
    else{
        n=m
      for(i=BigInt(2);i<=n;i++){
        product = product * i;
      }
      let num =  [...String(product)].map(Number);
    for(i=num.length-1;i>=0;i--){
        if(num[i]!=0){
            break
        }
        else{
            count++
        }
    }
    return count
   }
  }