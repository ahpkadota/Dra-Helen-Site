import { useState, useEffect } from "react";
import tips from "../data/tips.json";
import styles from "./TipBox.module.css";

// Utility to import images
async function importImage(imageName) {
  try {
    const image = await import(`../assets/img/${imageName}`);
    return image.default;
  } catch (error) {
    console.error("Failed to load image", error);
    return null;
  }
}

// Unified TipItem component
function TipItem({ title, content, icon, reversed }) {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    importImage(icon).then(setImgSrc);
  }, [icon]);

  const imageElm = (
    <div className="col-auto d-none d-lg-block">
      <img
        src={imgSrc}
        className={`img-fluid ${styles["img-fit"]}`}
        alt={title}
      />
    </div>
  );
  return (
    <div className="lc-block mb-5">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        {!reversed && imageElm}
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-3">{title}</h3>
          <p className="card-text mb-auto">{content}</p>
        </div>
        {reversed && imageElm}
      </div>
    </div>
  );
}

// List of tips
function TipList({ data }) {
  return data.map((item, index) => (
    <TipItem
      key={index}
      title={item.title}
      content={item.content}
      icon={item.icon}
      reversed={index % 2 === 0}
    />
  ));
}

// Header component
function ContentHeader() {
  return (
    <section className="background-cover background-left-center bg-dark pb-5 pt-5 text-center text-white">
      <div className="container pb-5 pt-5">
        <div className="row">
          <div className="col-lg-9 col-xl-8 ms-auto me-auto">
            <h1 className="display-4 fw-bold mb-3">Dicas</h1>
            <p className="h6 text-primary">{tips.intro}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
// Main component export
export default function TipBox({ data }) {
  return (
    <>
      <ContentHeader />
      <section className="bg-light pb-5 pt-5 text-center text-lg-start">
        <div className="container py-5">
          <div className="row">
            <TipList data={data} />
          </div>
        </div>
      </section>
    </>
  );
}
