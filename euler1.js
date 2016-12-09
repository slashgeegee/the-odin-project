/* Problem: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. */

function clickme(){
var multiplesOfX = 0 ;
var x = document.getElementById("userInput").value;

for (x = 0 ; x < 1000 ; x++) {
  if (x % 3 === 0 || x % 5 ===0){
    multiplesOfX+= x;
  }
}

document.getElementById("outout").innerHTML = multiplesOfX;

}
