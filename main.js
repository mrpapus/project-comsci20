// magic 8 ball JS

//variables
let outputEL = document.getElementById("output");

// event listener
document.getElementById("btn").addEventListener("click", btnClicked);

// function
function btnClicked() {
  //variables
  let inputEL = document.getElementById("askquestion").value.toLowerCase();
  let response = checkQuestion(inputEL);
  // output checkQuestion

  //if different answer, make random
  if (response == "") {
    response = randomResponse();
  }
  outputEL.innerHTML = response;
}

// checks question and outputs response
function checkQuestion(input) {
  // process
  if (input == "") {
    return "Please ask a question...";
  } else if (input == "does a magic 8 ball actually work?") {
    return "HOW DARE YOU DOUBT THE SPIRIT OF THE 8 BALL";
  } else if (input == "is javascript awesome?") {
    return "AS EXPECTED";
  } else {
    return "";
  }
}

// random reponses to correct questions
function randomResponse() {
  //random number
  let number = Math.random();
  //pick a random output
  if (number < 0.2) {
    return "Without a Doubt";
  } else if (number < 0.4) {
    return "As I see it, yes";
  } else if (number < 0.6) {
    return "Concentrate and ask again";
  } else if (number < 0.8) {
    return "Don't count on it";
  } else if (number < 1) {
    return "Outlook not so good ";
  }
}
