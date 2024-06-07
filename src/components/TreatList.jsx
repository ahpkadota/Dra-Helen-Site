import treatments from "../data/content.json";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "./TreatList.module.css"

export default function TreatList() {
  async function loadIcon(iconName) {
    try {
      const icon = await import(`../assets/img/icons/${iconName}.png`);
      return icon.default;
    } catch (error) {
      console.error(`Icon loading failed for ${iconName}:`, error);
      return null; // or a default icon
    }
  }

  function TreatmentItem({ title, path }) {
    const [icon, setIcon] = useState(null);

    useEffect(() => {
      loadIcon(path).then(setIcon);
    }, [path]);

    return (
      <div className="col-sm-6 col-xl-2 pb-3 pt-3">
        <div className="pb-3 pt-3 text-center">
          <Link to={`/${path}`}>
            <div className="bg-white border border-primary d-inline-block mb-4 p-4 rounded-circle">
              <img src={icon} alt={title} className={styles.icon}/>
            </div>
          </Link>
          <h4 className="fw-bold h6 text-dark">{title}</h4>
        </div>
      </div>
    );
  }

  function TreatmentList() {
    let list = Object.keys(treatments).map((treatment) => {
      return (
        <TreatmentItem
          title={treatments[treatment].header}
          path={treatment}
        ></TreatmentItem>
      );
    });
    return list;
  }
  return (
    <section className="bg-light pb-5 pt-5">
      <div className="container pb-5 pt-5">
        <div className="align-items-center mb-3 row">
          <div className="col-lg-8 ms-auto me-auto text-center">
            <h3 className="fw-bold h2 mb-1">Tratamentos</h3>
          </div>
        </div>
        <div className="row">
          <TreatmentList></TreatmentList>
        </div>
      </div>
    </section>
  );
}
