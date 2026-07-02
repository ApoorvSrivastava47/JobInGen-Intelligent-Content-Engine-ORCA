import {
  FaDownload,
  FaExpand,
  FaImage,
} from "react-icons/fa";

import "../styles/ImageCard.css";

function ImageCard({ imagePath }) {

  if (!imagePath) return null;

  // Railway Backend URL
  const API_URL = import.meta.env.VITE_API_URL;

  // Remove starting slash if present
  const cleanPath = imagePath.replace(/^\/+/, "");

  const imageUrl = `${API_URL}/${cleanPath}`;

  const filename = cleanPath.split("/").pop();

  function downloadImage() {

    const a = document.createElement("a");

    a.href = imageUrl;

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
          src={imageUrl}
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
          href={imageUrl}
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