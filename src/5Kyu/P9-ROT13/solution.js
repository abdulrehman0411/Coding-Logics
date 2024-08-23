// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// Test examples:

// "EBG13 rknzcyr." -> "ROT13 example."

// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"
function rot13(str) {
    let i=0,charcode=0;
    let a= ""
   while(i!=str.length){
       if(str.charCodeAt(i) >=65 && str.charCodeAt(i) <=90){
           charcode = str.charCodeAt(i) + 13
          
           if(charcode>90)
           {
               charcode = charcode - 90
               charcode = charcode + 64
               a+=String.fromCharCode(charcode)
               i++
           }
           else {
               a+=String.fromCharCode(charcode)
               i++
           }
       }
      else if(str.charCodeAt(i) >=97 && str.charCodeAt(i) <=122){
           charcode = str.charCodeAt(i) + 13
           if(charcode>122)
           {
               charcode = charcode - 122
               charcode = charcode + 96
               a+=String.fromCharCode(charcode)
               i++
           }
           else {
               a+=String.fromCharCode(charcode)
               i++
           }
       }
       else{
           a+=str[i];
           i++
       }
      
   }
   return a 
   }