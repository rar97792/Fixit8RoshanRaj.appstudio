//multiplication function
function multiply(x,y) {
  return x * y
}  

//addition function
function addition(x,y) {
  return Number(x) + Number(y) 
}  

//call multiply function
multiButton.onclick=function(){
  answerlbl.value = multiply(inpNum1.value, inpNum2.value)
}

//call addition function
addButton.onclick=function(){
  answerlbl.value = addition(inpNum1.value, inpNum2.value)
}

//reset function
resetButton.onclick=function(){
  inpNum1.value = ""
  inpNum2.value = ""
  answerlbl.value = ""
}
