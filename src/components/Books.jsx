export default function Books({ book1, book2 }) {
  return (
    <section className="bg-light pb-5 pt-5 text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">Meus livros</h2>
        <div className="justify-content-center row">
          <div className="col-lg-4 col-md-6 pb-3 pt-3">
            <div className="bg-white shadow">
              {" "}
              <a href="#" className="d-block">
                <img
                  src={book1}
                  className="img-fluid w-100"
                  alt="..."
                  width="700"
                  height="480"
                />
              </a>
              <div className="p-3">
                {" "}
                <a href="#" className="text-dark text-decoration-none">
                  <h3 className="fw-bold h5">Primeiros contatos</h3>
                </a>
                <h4 className="fw-bold h6 small text-secondary">
                  10 August 2020
                </h4>
                <p className="mb-0">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-3 pt-3">
            <div className="bg-white shadow">
              {" "}
              <a href="#" className="d-block">
                <img
                  src={book2}
                  className="img-fluid w-100"
                  alt="..."
                  width="700"
                  height="480"
                />
              </a>
              <div className="p-3">
                {" "}
                <a href="#" className="text-dark text-decoration-none">
                  <h3 className="fw-bold h5">Fotopoemas viajantes</h3>
                </a>
                <h4 className="fw-bold h6 small text-secondary">
                  10 August 2020
                </h4>
                <p className="mb-0">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
