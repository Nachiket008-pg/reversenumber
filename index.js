// console.log("Hello");

function run(){
    number = document.getElementById('num').value;
var ans = 0;
    while (number != 0 ){
        let digit = number % 10 ;
        ans = (ans*10) + digit;
        number = Math.floor(number/10)
        document.getElementById("text").innerText = ("Result is :")
        result = document.getElementById('result').innerHTML = (ans)
    }
    
}
function copy(){
    number = document.getElementById('num').value;
   var new_el = number;
   document.getElementById("text1").innerText = ("Entered number is : ")
   document.getElementById("new").innerHTML = (new_el) 
}

  
  