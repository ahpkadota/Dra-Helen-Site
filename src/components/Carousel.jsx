export default function Carousel({carousel1, carousel2}) {
  return (
    <section className="pb-5 pt-5 text-center text-lg-start text-secondary">
      <div className="container pb-4 pt-4">
        <div className="align-items-center row">
          <div className="col-lg-6 ms-auto order-lg-2 py-3 text-center">
            <div
              id="carousel1"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-bs-target="#carousel1"
                  data-bs-slide-to="0"
                  className="active"
                ></li>
                <li data-bs-target="#carousel1" data-bs-slide-to="1"></li>
                <li data-bs-target="#carousel1" data-bs-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img
                    src={carousel1}
                    className="d-block w-100"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src={carousel2}
                    className="d-block w-100"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>{" "}
              <a
                className="carousel-control-prev"
                href="#carousel1"
                role="button"
                data-bs-slide="prev"
              >
                {" "}
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>{" "}
                <span className="visually-hidden">Previous</span>{" "}
              </a>{" "}
              <a
                className="carousel-control-next"
                href="#carousel1"
                role="button"
                data-bs-slide="next"
              >
                {" "}
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>{" "}
                <span className="visually-hidden">Next</span>{" "}
              </a>
            </div>
          </div>
          <div className="col-lg-5 order-lg-1 py-3">
            <h2 className="display-4 fw-bold text-primary">
              Sobre A Dra. Helen&nbsp;
            </h2>
            <h3 className="fw-light mb-4 text-dark">
              Medica psiquiatra, mae de 3 kitty
            </h3>
            <p className="mb-4">
              Médica formada pela USP - Ribeirão Preto, com residência médica em
              Psiquiatria pelo Hospital das Clínicas da USP - Ribeirão Preto;
              pós-graduada em Psiquiatria Forense pelo Instituto de Psiquiatria
              (IPQ) da USP - São Paulo.
            </p>
            <p className="mb-4">
              Docente e preceptora no curso de Medicina da Universidade Anhembi
              Morumbi – campus Piracicaba.
            </p>
            <p className="mb-4">
              Atuou como psiquiatra concursada no CAPS infantojuvenil e CAPS
              álcool&drogas da Prefeitura de Piracicaba entre 2022-2023; atuou
              como médica psiquiatra plantonista e preceptora no Instituto
              Bairral de Psiquiatria, com experiência em internação em 2022.
            </p>
            <p className="mb-4">
              Escritora e leitora: veja minhas reflexões sobre Saúde Mental +
              Literatura e Cinema em @livrosepsiquiatria
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
