
// Psuedo Code:
// page 1 Start quiz button
// page 2 is the game questions
// page 3 is the end of game results
// timer starts when the page loads
// when timer ends, answers are tallied and displayed


// Didn't  quite get this working... The piece is intended to handle scoreing although I hadn't elaborated that part out to match with the number of questions
// Additionally, my timer is in this
var answers = [0,0,0];
var not_ended =true
window.onload = timedText;
function timedText() {
   var txt = document.getElementById('txt'),
     counter = 10;
   var timer = setInterval(function () {

     if(counter === 0 & not_ended) {
     alert(answers.reduce(function(a, b) { 
         return a + b; 
        }, 0));
       not_ended = false;
       }
     txt.value = counter + " seconds";
     counter--;
   }, 1000 * 180);
}

timer = "counter"

$("#btnClick").on("click", function() {
  if ($("#questions").css("display") != "none") {
    $("#2").html("Here is my dynamic content").show().siblings("div").hide();
  } else if ($("#2").css("display") != "none") {
    $("#1").show().siblings("div").hide();
  }
});

