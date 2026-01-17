function getRecommendation() {
    const score = document.getElementById("score").value;
    const result = document.getElementById("result");

    if (score === "") {
        result.innerText = "Please enter your score.";
        return;
    }

    const numScore = parseInt(score);

    if (numScore >= 80) {
        result.innerText = "Excellent! Focus on advanced topics and mock tests.";
    } else if (numScore >= 50) {
        result.innerText = "Good progress. Revise weak areas and practice regularly.";
    } else {
        result.innerText = "Needs improvement. Start with basics and visual learning resources.";
    }
}
