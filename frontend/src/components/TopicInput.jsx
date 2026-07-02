import { useState } from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";

import "../styles/TopicInput.css";
import { generateContent } from "../services/api";

function TopicInput({ onGenerate }) {

  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState("linkedin");

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [progress, setProgress] = useState(0);

  const loadingStages = [
    "🧠 Planner Agent is building strategy...",
    "✍ AI Copywriter is writing content...",
    "🔍 Critic Agent is reviewing quality...",
    "🎨 Generating AI Image...",
    "✅ Finalizing Results..."
  ];

  async function handleGenerate() {

    if (!topic.trim()) {
      alert("Please enter a topic.");
      return;
    }

    setLoading(true);
    setProgress(0);

    let stage = 0;

    setLoadingText(loadingStages[0]);

    const interval = setInterval(() => {

      stage++;

      if (stage < loadingStages.length) {

        setLoadingText(loadingStages[stage]);
        setProgress((stage + 1) * 20);

      }

    }, 1000);

    try {

      const result = await generateContent(
        topic,
        platform
      );

      setProgress(100);

      onGenerate(result);

    } catch (error) {

      console.error(error);
      alert("Failed to generate content.");

    } finally {

      clearInterval(interval);

      setTimeout(() => {

        setLoading(false);
        setLoadingText("");
        setProgress(0);

      }, 500);

    }

  }

  function handleKeyDown(e) {

    if (e.key === "Enter") {
      handleGenerate();
    }

  }

  return (

    <section className="topic-section">

      <div className="platform-selector">

        {[
          ["linkedin", "LinkedIn"],
          ["instagram", "Instagram"],
          ["twitter", "X"],
          ["facebook", "Facebook"],
          ["blog", "Blog"],
        ].map(([value, label]) => (

          <button
            key={value}
            type="button"
            className={
              platform === value
                ? "platform-pill active"
                : "platform-pill"
            }
            onClick={() => setPlatform(value)}
          >
            {label}
          </button>

        ))}

      </div>

      <div className="topic-box">

        <div className="topic-icon">
          <FaWandMagicSparkles />
        </div>

        <input
          type="text"
          className="topic-input"
          placeholder="Describe the content you want to generate..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          className="generate-btn"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? loadingText : "🚀 Generate"}
        </button>

      </div>

      {

        loading && (

          <div className="loading-wrapper">

            <div className="loading-bar">

              <div
                className="loading-fill"
                style={{
                  width: `${progress}%`
                }}
              />

            </div>

            <p className="loading-stage">

              {loadingText}

            </p>

          </div>

        )

      }

    </section>

  );

}

export default TopicInput;