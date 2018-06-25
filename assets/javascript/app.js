function submissions(){
	var result = 5;
	var score = 0;
	
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	
	var correctAnswers = ["d","c","d","a","b"];
	
	for(i = 1; i <= result;i++){
		if(eval('q'+i) == correctAnswers[i - 1]){
			score++;
		}
	}
	
	var results = document.getElementById('results');
    results.innerHTML = '<h3>You got <span>'+score+'</span> right out of <span>'+result+'</span></h3>';
    alert("Completed! Check your results below.")
	
	return false;
}

var total_seconds = 10;
var c_minutes = parseInt(total_seconds/60);
var c_seconds = parseInt(total_seconds%60);

function checkTime(){
    document.getElementById("quiz-timer").innerHTML = 'Time Left; ' + c_minutes + " minutes " + c_seconds + " seconds ";
    if(total_seconds <=0) {
        alert("Time's Up!");
        setTimeout(submissions(), 1);
    }
    else {
        total_seconds = total_seconds-1;
        c_minutes = parseInt(total_seconds/60);
        c_seconds = parseInt(total_seconds%60);
        setTimeout("checkTime()", 1000);
    }
}
setTimeout("checkTime()", 1000);