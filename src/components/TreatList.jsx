import treatments from "../data/content.json";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "./TreatList.module.css";
import useImage from "../hooks/useImage";

// Create a context for the icons
const iconsContext = require.context('../assets/img/icons', false, /\.png$/);

// Create an object to map icon names to their paths
const icons = iconsContext.keys().reduce((icons, key) => {
  const iconName = key.match(/\.\/(.*)\.png$/)[1];
  icons[iconName] = iconsContext(key);
  return icons;
}, {});

export default function TreatList() {
  function loadIcon(iconName) {
    return icons[iconName] ? icons[iconName] : null; // return the icon path or null if not found
  }

  function TreatmentItem({ title, path }) {
    const [icon, setIcon] = useState(null);
    const { loading, error, image } = useImage("assets/img/icons/"+path+".png")
    useEffect(() => {
      setIcon(loadIcon(path));
    }, [path]);

    return (
      <div className="col-sm-6 col-xl-2 pb-3 pt-3">
        <div className="pb-3 pt-3 text-center">
          <Link to={`/${path}`}>
            <div className="bg-white border border-primary d-inline-block mb-4 p-4 rounded-circle">
              {icon && <img src={image} alt={title} className={styles.icon}/>}
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
          key={treatment}
          title={treatments[treatment].header}
          path={treatment}
        />
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
          <TreatmentList />
        </div>
      </div>
    </section>
  );
}
