import { Link } from "react-router-dom";

export default function Hero({ main }) {
  return (
    <section className="c background-right-top pb-5 position-relative pt-5">
      <div className="cont container mb-5 mt-5 pb-5 pt-5">
        <div className="align-items-center mb-5 mt-5 pb-5 pt-5 row">
          <div className="col-md-10 col-xl-7">
            <h1 className="display-4 fw-bold text-capitalize text-dark">
              <span className="d-block fw-normal">
                Dra. Helen Furlan Torina
              </span>
              Médica Psiquiatra
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
