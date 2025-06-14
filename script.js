const API_KEY = AIzaSyDfTdViHMgd2r7PnCtCWPGg2YBJS9ODLs8; // Replace with your actual API key

async function getTop10() {
    const query = document.getElementById("query").value;
    const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateText?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: `Give me the top 10 ${query} in Baguio with reviews and details.` })
    });

    const data = await response.json();
    document.getElementById("results").innerText = data.candidates[0].output;
}
