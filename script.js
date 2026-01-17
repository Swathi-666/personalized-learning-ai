function recommend() {
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
        <b>Insights:</b> Weak conceptual under

