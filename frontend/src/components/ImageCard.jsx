import {
  FaDownload,
  FaExpand,
  FaImage,
} from "react-icons/fa";

import "../styles/ImageCard.css";

function ImageCard({ imageUrl }) {

  if (!imageUrl) return null;

  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://jobingen-intelligent-content-engine-orca-production-ddfc.up.railway.app";

  const fullImageUrl = `${API_URL}${imageUrl}`;

  console.log("========== IMAGE DEBUG ==========");
  console.log("API_URL:", API_URL);
  console.log("imageUrl:", imageUrl);
  console.log("fullImageUrl:", fullImageUrl);
  console.log("===============================");

  const filename = imageUrl.split("/").pop();

  function downloadImage() {

    window.open(fullImageUrl, "_blank");

  }

  return (

    <section className="image-card">

      <div className="image-header">

        <h2>

          <FaImage />

          Generated Image

        </h2>

      </div>

      <div className="image-preview">

        <img
          src={fullImageUrl}
          alt="Generated"
          className="generated-image"
          onLoad={() => console.log("✅ Image Loaded")}
          onError={(e) => {
            console.error("❌ Image Failed");
            console.error("Requested URL:", e.currentTarget.src);
          }}
        />

      </div>

      <div className="image-actions">

        <button
          className="primary-btn"
          onClick={downloadImage}
        >

          <FaDownload />

          Download PNG

        </button>

        <a
          href={fullImageUrl}
          target="_blank"
          rel="noreferrer"
          className="secondary-btn"
        >

          <FaExpand />

          Open Full Size

        </a>

      </div>

    </section>

  );

}

export default ImageCard;