const API_KEY = "AIzaSyDfTdViHMgd2r7PnCtCWPGg2YBJS9ODLs8"; // Do NOT expose real API keys in production!

async function getTop10() {
    const query = document.getElementById("query").value;
    console.log("User input:", query);

    // Adjust this URL if needed based on the latest Gemini API documentation.
    const apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateText?key=${API_KEY}`;

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                prompt: `Give me the top 10 ${query} in Baguio with reviews and details.`,
                temperature: 0.7
            })
        });
        console.log("API Response Status:", response.status, response.statusText);

        if (!response.ok) {
            console.error("Response error:", response.status, response.statusText);
            document.getElementById("results").innerText = "Error: " + response.statusText;
            return;
        }

        const data = await response.json();
        console.log("Parsed Data:", data);

        if (data && data.candidates && data.candidates.length > 0) {
            document.getElementById("results").innerText = data.candidates[0].output;
        } else {
            document.getElementById("results").innerText = "No data returned.";
        }
    } catch (error) {
        console.error("Fetch error:", error);
        document.getElementById("results").innerText = "Error occurred. See console for details.";
    }
}
