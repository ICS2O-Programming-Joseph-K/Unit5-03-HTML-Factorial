"use strict"

function answer () {
  //variables
  let answer = 1
  let userNum = parseInt(document.getElementById('number').value)
  if (userNum > 0){

  //do while loop
  do {
    //build the equation for the factorial
    answer = answer * userNum
    userNum = userNum - 1

  } while (userNum > 0)
  }
  //display the answer
  document.getElementById('display-results').innerHTML = answer
}