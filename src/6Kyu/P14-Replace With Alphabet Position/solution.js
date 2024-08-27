// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
function alphabetPosition(text) {
    let i;
    let num = [];
    for(i=0;i<text.length;i++){
      if(text[i] == 'a' || text[i] == 'A'){
        if(i+1==text.length){
          num += '1';
        }
        num += '1 ';
      }
      else if(text[i] == 'b' || text[i] == 'B'){
        num += '2 ';
        if(i+1==text.length){
          num += '2';
        }
      }
      else if(text[i] == 'c' || text[i] == 'C'){
        num += '3 ';
        if(i+1==text.length){
          num += '3';
        }
      }
      else if(text[i] == 'd' || text[i] == 'D'){
       num += '4 ';
        if(i+1==text.length){
          num += '4';
        }
      }
      else if(text[i] == 'e' || text[i] == 'E'){
       num += '5 ';
        if(i+1==text.length){
          num += '5';
        }
      }
      else if(text[i] == 'f' || text[i] == 'F'){
       num += '6 ';
        if(i+1==text.length){
          num += '6';
        }
      }
      else if(text[i] == 'g' || text[i] == 'G'){
       num += '7 ';
        if(i+1==text.length){
          num += '7';
        }
      }
      else if(text[i] == 'h' || text[i] == 'H'){
       num += '8 ';
        if(i+1==text.length){
          num += '8';
        }
      }
      else if(text[i] == 'i' || text[i] == 'I'){
       num += '9 ';
        if(i+1==text.length){
          num += '9';
        }
      }
      else if(text[i] == 'j' || text[i] == 'J'){
        num += '10 ';
        if(i+1==text.length){
          num += '10';
        }
      }
      else if(text[i] == 'k' || text[i] == 'K'){  
      if(i+1==text.length){
          num += '11';
        }
        else{
          num += '11 ';
        }
      }
      else if(text[i] == 'l' || text[i] == 'L'){
        num += '12 ';
        if(i+1==text.length){
          num += '12';
        }
      }
      else if(text[i] == 'm' || text[i] == 'M'){
       num += '13 ';
        if(i+1==text.length){
          num += '13';
        }
      }
      else if(text[i] == 'n' || text[i] == 'N'){
        num += '14 ';
        if(i+1==text.length){
          num += '14';
        }
      }
      else if(text[i] == 'o' || text[i] == 'O'){
        num += '15 ';
        if(i+1==text.length){
          num += '15';
        }
      }
      else if(text[i] == 'p' || text[i] == 'P'){
        num += '16 ';
        if(i+1==text.length){
          num += '16';
        }
      }
      else if(text[i] == 'q' || text[i] == 'Q'){
        num += '17 ';
        if(i+1==text.length){
          num += '17';
        }
      }
      else if(text[i] == 'r' || text[i] == 'R'){
        num += '18 ';
        if(i+1==text.length){
          num += '18';
        }
      }
      else if(text[i] == 's' || text[i] == 'S'){
       num += '19 ';
        if(i+1 ==text.length){
          num += '19';
        }
      }
      else if(text[i] == 't' || text[i] == 'T'){
        num += '20 ';
        if(i+1==text.length){
          num += '20';
        }
      }
      else if(text[i] == 'u' || text[i] == 'U'){
        num += '21 ';
        if(i+1==text.length){
          num += '21';
        }
      }
      else if(text[i] == 'v' || text[i] == 'V'){
        num += '22 ';
        if(i+1==text.length){
          num += '22';
        }
      }
      else if(text[i] == 'w' || text[i] == 'W'){
        num += '23 ';
        if(i+1==text.length){
          num += '23';
        }
      }
      else if(text[i] == 'x' || text[i] == 'X'){
        num += '24 ';
        if(i+1==text.length){
          num += '24';
        }
      }
      else if(text[i] == 'y' || text[i] == 'Y'){
        num += '25 ';
        if(i+1==text.length){
          num += '25';
        }
      }
      else if(text[i] == 'z' || text[i] == 'Z'){
        num += '26 ';
        if(i+1==text.length){
          num += '26';
        }
      }
      
    }
    
   num = num.split(" ")
   num.splice(num.length-1, 1)
   num = num.join(" ")
   return num
  }