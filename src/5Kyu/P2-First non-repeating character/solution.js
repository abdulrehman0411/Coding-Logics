// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.
function firstNonRepeatingLetter(s) {
    // Add your code here
    let t=s.toLowerCase()
    let n = ""
    let i =0;
    let j=0;
    let count = 0
  
        for(i=0;i<t.length;i++)
        {
          count=0
            for(j=0;j<t.length;j++)
            {
                if(i!=j)
                {
                    if(t[i]==t[j])
                    {
                      count++;  
                    }
                }
            }
          if(count==0)
            {
              n=s[i];
              break;
            }
    }
    return n;
  }