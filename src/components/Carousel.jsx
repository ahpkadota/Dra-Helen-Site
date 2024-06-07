import "./CarouselStyles.css"; // Ensure this path matches your file structure

export default function Carousel({ imgs }) {

  function CarouselMain() {
    let id = "carousel1";
    return (
      <div className="col-lg-6 ms-auto order-lg-2 py-3 text-center">
        <div id={id} className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            {imgs.map((img, i) => (
              <li
                data-bs-target={`#${id}`}
                data-bs-slide-to={i}
                className={i === 0 ? "active" : ""}
              ></li>
            ))}
          </ol>
          <div className="carousel-inner">
            {imgs.map((img, i) => (
              <div
                className={`carousel-item ${i === 0 ? "active" : ""}`}
                data-bs-interval="10000"
              >
                <img src={img} className="d-block w-100" alt="carousel" />
              </div>
            ))}
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
      </div>
    );
  }
  return (
    <section className="pb-5 pt-5 text-center text-lg-start text-secondary">
      <div className="container pb-4 pt-4">
        <div className="align-items-center row">
          <CarouselMain></CarouselMain>
          <div className="col-lg-5 order-lg-1 py-3">
            <h2 className="display-4 fw-bold text-primary">
              Sobre A Dra. Helen&nbsp;
            </h2>
            <p className="mb-4">
              Médica formada pela USP - Ribeirão Preto (CRM 201232), com
              residência médica em Psiquiatria pelo Hospital das Clínicas da USP
              - Ribeirão Preto (RQE 98861); pós-graduada em Psiquiatria Forense
              pelo Instituto de Psiquiatria (IPQ) da USP - São Paulo.
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
