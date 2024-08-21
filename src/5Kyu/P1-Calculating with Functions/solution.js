// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
function zero(func) {
    if(!func)
    {
        return 0
    }
    else{
         let arr = func.split('');
  let opr = arr.splice(1, 1)
  let num = arr.splice(0, 1)
  num = Number(num)
  if(opr=="+")
  {
      num = num + 0;
      return num
  }
  if(opr=="-")
  {
      num = 0 - num;
      return num
  }
  if(opr=="*")
  {
      num = num * 0;
      return num
  }
  if(opr=="/")
  {
      num = 0 / num;
      return num
  }
    }
 
}
function one(func) {
    if(!func)
    {
        return 1
    }
    else{
         let arr = func.split('');
  let opr = arr.splice(1, 1)
  let num = arr.splice(0, 1)
  num = Number(num)
  if(opr=="+")
  {
      num = num + 1;
      return num
  }
  if(opr=="-")
  {
      num = 1 - num;
      return num
  }
  if(opr=="*")
  {
      num = num * 1;
      return num
  }
  if(opr=="/")
  {
      num = 1 / num;
      return num
  }
    }
 
}
function two(func) {
    if(!func)
    {
        return 2
    }
    else{
         let arr = func.split('');
  let opr = arr.splice(1, 1)
  let num = arr.splice(0, 1)
  num = Number(num)
  if(opr=="+")
  {
      num = num + 2;
      return num
  }
  if(opr=="-")
  {
      num = 2 - num;
      return num
  }
  if(opr=="*")
  {
      num = num * 2;
      return num
  }
  if(opr=="/")
  {
      num = 2 / num;
      return num
  }
    }
 
}
function three(func){
    if(!func)
    {
        return 3
    }
    else{
         let arr = func.split('');
  let opr = arr.splice(1, 1)
  let num = arr.splice(0, 1)
  num = Number(num)
  if(opr=="+")
  {
      num = num + 3;
      return num
  }
  if(opr=="-")
  {
      num = 3 - num;
      return num
  }
  if(opr=="*")
  {
      num = num * 3;
      return num
  }
  if(opr=="/")
  {
      num = 3 / num;
      return num
  }
    }
 
}
function four(func) {
    if(!func)
    {
        return 4
    }
    else{
         let arr = func.split('');
  let opr = arr.splice(1, 1)
  let num = arr.splice(0, 1)
  num = Number(num)
  if(opr=="+")
  {
      num = num + 4;
      return num
  }
  if(opr=="-")
  {
      num = 4 - num;
      return num
  }
  if(opr=="*")
  {
      num = num * 4;
      return num
  }
  if(opr=="/")
  {
      num = 4 / num;
      return num
  }
    }
}
function five(func) {
    if(!func)
    {
        return 5
    }
    else{
         let arr = func.split('');
  let opr = arr.splice(1, 1)
  let num = arr.splice(0, 1)
  num = Number(num)
  if(opr=="+")
  {
      num = num + 5;
      return num
  }
  if(opr=="-")
  {
      num = 5 - num;
      return num
  }
  if(opr=="*")
  {
      num = num * 5;
      return num
  }
  if(opr=="/")
  {
      num = 5 / num;
      return num
  }
    }
}
function six(func) {
    if(!func)
    {
        return 6
    }
    else{
         let arr = func.split('');
  let opr = arr.splice(1, 1)
  let num = arr.splice(0, 1)
  num = Number(num)
  if(opr=="+")
  {
      num = num + 6;
      return num
  }
  if(opr=="-")
  {
      num = 6 - num;
      return num
  }
  if(opr=="*")
  {
      num = num * 6;
      return num
  }
  if(opr=="/")
  {
      num = 6 / num;
      return num
  }
    }
}
function seven(func) {
    if(!func)
    {
        return 7
    }
    else{
         let arr = func.split('');
  let opr = arr.splice(1, 1)
  let num = arr.splice(0, 1)
  num = Number(num)
  if(opr=="+")
  {
      num = num + 7;
      return num
  }
  if(opr=="-")
  {
      num = 7 - num;
      return num
  }
  if(opr=="*")
  {
      num = num * 7;
      return num
  }
  if(opr=="/")
  {
      num = 7 / num;
      return num
  }
    }
}
function eight(func) {
    if(!func)
    {
        return 8
    }
    else{
         let arr = func.split('');
  let opr = arr.splice(1, 1)
  let num = arr.splice(0, 1)
  num = Number(num)
  if(opr=="+")
  {
      num = 8 + num;
      return num
  }
  if(opr=="-")
  {
      num = 8 - num;
      return num
  }
  if(opr=="*")
  {
      num = 8 * num;
      return num
  }
  if(opr=="/")
  {
      num = 8 / num;
      return num
  }
    }
}
function nine(func) {
    if(!func)
    {
        return 9
    }
    else{
         let arr = func.split('');
  let opr = arr.splice(1, 1)
  let num = arr.splice(0, 1)
  num = Number(num)
  if(opr=="+")
  {
      num = num + 9;
      return num
  }
  if(opr=="-")
  {
      num = 9 - num;
      return num
  }
  if(opr=="*")
  {
      num = num * 9;
      return num
  }
  if(opr=="/")
  {
      num = 9 / num;
      return num
  }
    }
}

function plus(num) {
    let str = num + "+"
    return str
}
function minus(num) {
 let str = num + "-"
    return str
}
function times(num) {
 let str = num + "*"
 return str
}
function dividedBy(num) {
  let str = num + "/"
    return str
}