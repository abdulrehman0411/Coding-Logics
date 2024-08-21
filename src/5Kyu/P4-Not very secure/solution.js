// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore
function alphanumeric(string){
    //your code here
    let check = true;
     if(!string){
           check =  false
           return check;
         }
    else{
      for(i=0;i<string.length;i++){  
        
       if(string[i]==" " || string[i]=="_")
          {
            check =  false
            return check;
          }
       else if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90)
          {
            check = true;
          }
       else if(string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122)
          {
            check = true;
          }
       else if(string.charCodeAt(i)>=48 && string.charCodeAt(i)<=57)
          {
            check = true;
          }
        else
          {
            check = false;
            return check
          }
  
    }
       return check;
    }
       
  }