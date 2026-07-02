const API_URL =
  "https://jobingen-intelligent-content-engine-orca-production-ddfc.up.railway.app";

export async function generateContent(topic, platform) {

  const response = await fetch(`${API_URL}/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      topic,
      platform,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return await response.json();
}