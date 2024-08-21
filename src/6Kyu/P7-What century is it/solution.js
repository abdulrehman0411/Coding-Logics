// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"
function whatCentury(year)
{
let arr = year.split('');
let century = arr.splice(0, 2).join('');
let decide = arr.splice(0, 2).join('');
decide = Number(decide)
century =  Number(century)
if(decide>0)
{
    century++;
}
if(century%10 == 1 && century%100>20)
{
    century =  String(century)
    century = century +  "st"
}
else if(century%10 == 2 && century%100>20)
{
    century =  String(century)
    century = century +  "nd"
}
else if(century%10 == 3 && century%100>20)
{
    century =  String(century)
    century = century +  "rd"
}
else {
    century =  String(century)
    century = century +  "th" 
}
 

return century
}