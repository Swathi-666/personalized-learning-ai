console.log("JS loaded");
function recommend() {
      console.log("Button clicked");
    const topic = document.getElementById("topic").value;
    const score = parseInt(document.getElementById("score").value);
    const output = document.getElementById("output");

    if (!topic || isNaN(score)) {
        output.innerHTML = "<b>Please enter both topic and score.</b>";
        return;
    }

    let recommendation = `<b>Topic:</b> ${topic}<br><br>`;

    if (score < 50) {
        recommendation += `
        <b>Performance Level:</b> Needs Improvement<br>
        <b>Insights:</b> Weak conceptual understanding detected.<br><br>
        <b>Personalized Learning Plan:</b>
        <ul>
            <li>Revise fundamentals using visual learning resources</li>
            <li>Watch short concept videos (10–15 min each)</li>
            <li>Solve beginner-level problems daily</li>
            <li>Attempt weekly self-assessment quizzes</li>
        </ul>
        `;
    } else if (score < 75) {
        recommendation += `
        <b>Performance Level:</b> Average<br>
        <b>Insights:</b> Partial understanding with scope for improvement.<br><br>
        <b>Personalized Learning Plan:</b>
        <ul>
            <li>Strengthen problem-solving techniques</li>
            <li>Practice mixed-difficulty questions</li>
            <li>Focus on weak subtopics</li>
            <li>Use timed practice tests</li>
        </ul>
        `;
    } else {
        recommendation += `
        <b>Performance Level:</b> Strong<br>
        <b>Insights:</b> High mastery level detected.<br><br>
        <b>Personalized Learning Plan:</b>
        <ul>
            <li>Explore advanced applications</li>
            <li>Attempt real-world problem scenarios</li>
            <li>Participate in peer discussions</li>
            <li>Mentor others or create summary notes</li>
        </ul>
        `;
    }

    output.innerHTML = recommendation;
}


