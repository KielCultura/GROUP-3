const API_KEY = "AIzaSyDfTdViHMgd2r7PnCtCWPGg2YBJS9ODLs8"; // Replace with your real API key

async function getTop10() {
    const query = document.getElementById("query").value;
    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: `Give me the top 10 ${query} in Baguio with reviews and details.`
                            }
                        ]
                    }
                ]
            })
        }
    );

    const data = await response.json();
    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
        document.getElementById("results").innerText = data.candidates[0].content.parts[0].text;
    } else {
        document.getElementById("results").innerText = "No results returned or an error occurred.";
        console.error("Gemini API error:", data);
    }
}
