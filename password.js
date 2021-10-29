alert("creates popup");
var answer = prompt("asks a question. (anwser hi)");
if (answer == "hi"){//sets an anwser var is a variable
  alert("You have passed. I will let you in!");//if they anwser corectly
}
else{//if they are wrong
  alert("you were supposed to say hi... BEGONE!");
  window.location.href = "https://coverager.com/introducing-limu-emu-and-doug/"
}//sends you to a link