const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

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
    throw new Error("Failed to generate content");
  }

  return await response.json();

}