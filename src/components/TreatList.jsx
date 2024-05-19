import treatments from "../data/content.json";
import { Link } from "react-router-dom";

export default function TreatList() {
  function TreatmentItem({ title, path }) {
    return (
      <div className="col-sm-6 col-xl-3 pb-3 pt-3">
        <div className="pb-3 pt-3 text-center">
          <Link to={`/${path}`}>
            <div className="bg-white border border-primary d-inline-block mb-4 p-5 rounded-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="currentColor"
                className="text-primary"
              >
                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm13.464 12.536L20 12l-3.536-3.536L15.05 9.88 17.172 12l-2.122 2.121 1.414 1.415zM6.828 12L8.95 9.879 7.536 8.464 4 12l3.536 3.536L8.95 14.12 6.828 12zm4.416 5l3.64-10h-2.128l-3.64 10h2.128z"></path>
              </svg>
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
        <TreatmentItem title={treatments[treatment].header} path={treatment}></TreatmentItem>
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
