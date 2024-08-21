// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"
function onlyDuplicates(str) {
    //your code here - remember iterable can be a string or an array
  let i =0;
      let j=0;
      let array = [];
      for(i=0;i<str.length;i++)
      {
          for(j=0;j<str.length;j++)
          {
              if(i!=j)
              {
                  if(str[i]==str[j])
                  {
                      array+=str[i];
                      break;
                  }
              }
          }
  }
  
  return array;
  }