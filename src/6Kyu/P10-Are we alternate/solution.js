// Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

// isAlt("amazon")
// // true
// isAlt("apple")
// // false
// isAlt("banana")
// // true
// Arguments consist of only lowercase letters.
function isAlt(word) {
    // happy codinggg
    let i=0;
    let check;
    console.log(word)
    if(word[i]=='a' || word[i]=='e' || word[i]=='i' || word[i]=='o' || word[i]=='u' || word[i]=='A' || word[i]=='E' || word[i]=='I' || word[i]=='O' || word[i]=='U'){
      for(i=0;i<word.length;i++){
      if(i%2==0){
        if(word[i]=='a' || word[i]=='e' || word[i]=='i' || word[i]=='o' || word[i]=='u' || word[i]=='A' || word[i]=='E' || word[i]=='I' || word[i]=='O' || word[i]=='U'){
          check = true;
        }
        else{
        return false
      }
      }
      
    }
    }
   else if(word[i+1]=='a' || word[i+1]=='e' || word[i+1]=='i' || word[i+1]=='o' || word[i+1]=='u' || word[i+1]=='A' || word[i+1]=='E' || word[i+1]=='I' || word[i+1]=='O' || word[i+1]=='U'){
      for(i=0;i<word.length;i++){
      if(i%2!=0){
        if(word[i]=='a' || word[i]=='e' || word[i]=='i' || word[i]=='o' || word[i]=='u' || word[i]=='A' || word[i]=='E' || word[i]=='I' || word[i]=='O' || word[i]=='U'){
          check = true;
        }
        else{
        return false
      }
      }
      
    }
    }
    else{
      return false
    }
    
    return check
  }
  