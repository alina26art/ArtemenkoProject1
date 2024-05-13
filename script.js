document.getElementById("b1").addEventListener("click", f1)

document.getElementById("b2").addEventListener("click", f2)

document.getElementById("fname").addEventListener("input", upperCase)

function f1(){

  let number1 = document.getElementById("a")
  let number2 = document.getElementById("b")
  let result = document.getElementById("sum")
  
  let a = parseInt(number1.value)
  let b = parseInt(number2.value)
  let s = parseInt(result.value)
  let summa = a + b
  let message = ""
  let backgroundColor = "lightgreen"
  
  if (s == summa){
    message = "OK";
  }
  else {
    backgroundColor = "red"
    message = "wrong"
  }
  
   document.getElementById("result").style.backgroundColor = backgroundColor
  document.getElementById("result").innerHTML = message
  
  number1.value = ""
  number2.value = ""
  result.value = ""
  
}

function f2(){
  let text = document.getElementById("input1").value;
  document.getElementById("input1").value = ""
  document.querySelector("div>span:nth-child(2)").innerHTML = text
  
  function upperCase() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function setBackgroundColor(color){
  document.querySelector("div>span").style.backgroundColor = color;
}
