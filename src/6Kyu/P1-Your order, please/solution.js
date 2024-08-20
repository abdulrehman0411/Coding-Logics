// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
    let arr = words.split(' ');
     let i, j;
     let final = [];
    for(i=0; i<arr.length; i++)
     {
       for(j=0;j<arr[i].length;j++)
         {
           if(arr[i][j]=='1')
           {
               final[0]=arr[i];
           }
            if(arr[i][j]=='2')
           {
               final[1]=arr[i];
           }
            if(arr[i][j]=='3')
           {
               final[2]=arr[i];
           }
            if(arr[i][j]=='4')
           {
               final[3]=arr[i];
           }
            if(arr[i][j]=='5')
           {
               final[4]=arr[i];
           }
            if(arr[i][j]=='6')
           {
               final[5]=arr[i];
           }
            if(arr[i][j]=='7')
           {
               final[6]=arr[i];
           }
            if(arr[i][j]=='8')
           {
               final[7]=arr[i];
           }
           if(arr[i][j]=='9')
           {
               final[8]=arr[i];
           }
     }
     }
     
    final = final.join(' ')
    return final;
   }