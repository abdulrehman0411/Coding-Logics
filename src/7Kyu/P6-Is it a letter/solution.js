// Description:
// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.


function isItLetter(character) {
    let letter = false;
    for(i='a'; i<='z'; i++)
      {
        if(i==character)
          {
            letter = true;
          }
      }
    return letter;
  }