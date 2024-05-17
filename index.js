//CALCULATOR PROGRMA

const display=document.getElementById("display");


function appendToDisplay(input){
//input parameterscuz we pass a character
display.value+=input;

}

function clearDisplay(){
display.value="";
}


function calculate(){
   try{
//EVAL FUNCTION IS UNSAFE AND DAGNEROUS
display.value=eval(display.value);//eval is like a calc

   }
   catch(error){
      display.value="error";
   }
}