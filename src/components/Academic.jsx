export default function Academic({ academic, imgs }) {
  function CarouselMain() {
    let id = "carousel2";
    return (
        <div id={id} className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            {imgs.map((img, i) => {
              return (
                <li
                  data-bs-target={`#${id}`}
                  data-bs-slide-to={i}
                  className={i === 0 ? "active" : ""}
                ></li>
              );
            })}
          </ol>
          <div className="carousel-inner">
            {imgs.map((img, i) => {
              return (
                <div
                  className={`carousel-item ${i === 0 ? "active" : ""}`}
                  data-bs-interval="10000"
                >
                  <img src={img} className="d-block w-100" />
                </div>
              );
            })}
          </div>
          <a
            className="carousel-control-prev"
            href={`#${id}`}
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href={`#${id}`}
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
    );
  }
  return (
    <section className="bg-light pb-5 pt-5 text-center text-lg-start">
      <div className="container pb-4 pt-4">
        <div className="align-items-center row">
          <h2 className="display-4 fw-bold text-primary">Formaçao Academica</h2>
          <div className="col-lg-6 p-5 text-center">
            <CarouselMain></CarouselMain>
          </div>
          <div className="col-lg-6 pb-3 pt-3">
            <div className="pb-3 pt-3">
              <h3 className="fw-bold h5">Graduação</h3>
              <p className="fw-light mb-0">
                USP Ribeirão Preto 2012-2018, com intercâmbio sanduíche na
                Newcastle University – Inglaterra
              </p>
            </div>
            <div className="pb-3 pt-3">
              <h3 className="fw-bold h5">Residência</h3>
              <p className="fw-light mb-0">
                Psiquiatria no HC da USP – Ribeirão Preto 2019-2022
              </p>
            </div>
            <div className="pb-3 pt-3">
              <h3 className="fw-bold h5">Pós-graduação</h3>
              <p className="fw-light mb-0">
                Psiquiatria Forense no IPQ-USP-SP 2020-2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
