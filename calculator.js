let num = ""
let numbers = []
let symbol = "+"
let sumEl = document.getElementById("sum-el")
function offer9(){
        num +="9"
}
function offer8(){
        num +="8"
}
function offer7(){
        num +="7"
}
function offer6(){
        num +="6"
}
function offer5(){
        num +="5"
}
function offer4(){
        num +="4"
}
function offer3(){
        num +="3"
}
function offer2(){
        num +="2"
}
function offer1(){
        num +="1"
}
function offer0(){
        num +="0"
}
 
function dot(){
    num +="."
}

 function add(){
   symbol = "+"
   numbers.push(num)
   num =""
 }

 function subtract(){
    symbol = "-"
    numbers.push(num)
    num =""
}

function multiply(){
    symbol = "*"
    numbers.push(num)
    num =""
}

function division(){
    symbol = "/"
    numbers.push(num)
    num =""
}
function res(){
    numbers.push(num)
    num = ""
  if(numbers.length>=2)
  {
    if(symbol==="+"){
        let num1 = parseFloat(numbers.shift())
        let num2 = parseFloat(numbers.shift())
        sumEl.textContent = num1 + num2
    }
    else if(symbol==="-"){
        let num1 = parseFloat(numbers.shift())
        let num2 = parseFloat(numbers.shift())
        sumEl.textContent = num1 - num2
    }
    else if(symbol==="*"){
        let num1 = parseFloat(numbers.shift())
        let num2 = parseFloat(numbers.shift())
        sumEl.textContent = num1 * num2
    }
    else {
        let num1 = parseFloat(numbers.shift())
        let num2 = parseFloat(numbers.shift())
        sumEl.textContent = num1 * num2
    }
  }
}