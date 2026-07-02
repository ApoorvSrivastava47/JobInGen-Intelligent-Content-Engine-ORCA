import {
  FaDownload,
  FaExpand,
  FaImage,
} from "react-icons/fa";

import "../styles/ImageCard.css";

function ImageCard({ imageUrl }) {

  if (!imageUrl) return null;

  const API_URL = import.meta.env.VITE_API_URL;

  const fullImageUrl = `${API_URL}${imageUrl}`;

  const filename = imageUrl.split("/").pop();

  function downloadImage() {

    const a = document.createElement("a");

    a.href = fullImageUrl;

    a.download = filename;

    a.click();

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