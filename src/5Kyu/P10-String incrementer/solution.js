// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (strng) {
    // return incrementedString
    let i,j=0,count=0;
    let no = ""
    let charArray = strng.split('');
    let len = strng.length
    let num = []
    for(i=len-1;i>=0;i--)
      {
        if(strng[i]>=0 && strng[i]<=9)
          {
            num[j]=strng[i]
            charArray.splice(i, 1)
            j++
          }
          else{
              break
          }
      }
      charArray = charArray.join("")
      
      if(!num){
         strng+=1 
      }
       else{
         
          //  for(i=0;i<num.length-1;i++){
          //         n = num[i]
          //         num[i] = num[i+1]
          //         num[i+1]=n
          //  }
         num = num.reverse();
           
           for(i=0;i<num.length-1;i++){
               n = num[i]
               if(n==0 && count==0 && num[i+1]!=9)
               {
                  charArray+=0
                  continue
               }
               else
               {
               no+=num[i]
               count++
               }
           }
           
           
          //  num = num.map(Number)
          //  num = num.join("")
          //  num = Number(num)
           no = num.join("")
           no = Number(no)
          //  if(no==9){
          //  charArray = charArray.split('') 
            
          //  charArray.splice(charArray.length-1, 1) 
            
          //  charArray = charArray.join("") 
          //  no+=1 
          //  charArray+=no
          //  }
          
             no+=1 
           charArray+=no  
           
           
           
       }
       return charArray
  }