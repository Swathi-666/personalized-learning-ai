function recommend() {
    var topic = document.getElementById("topic").value;
    var score = document.getElementById("score").value;
    var output = document.getElementById("output");

    if (topic === "" || score === "") {
        output.innerText = "Please enter both topic and score.";
        return;
    }

    score = parseInt(score);

    if (score < 50) {
        output.innerText =
            "Your score in " + topic +
            " indicates weak understanding. Revise basics using visual resources and practice daily.";
    } else if (score < 75) {
        output.innerText =
            "Your performance in " + topic +
            " is average. Focus on problem-solving and concept reinforcement.";
    } else {
        output.innerText =
            "You are strong in " + topic +
            ". Proceed to advanced topics and application-based learning.";
    }
}
