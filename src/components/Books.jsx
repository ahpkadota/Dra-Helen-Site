export default function Books({ book1, book2 }) {
  return (
    <section className="bg-light pb-5 pt-5 text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">Meus livros</h2>
        <div className="justify-content-center row">
          <div className="col-lg-4 col-md-6 pb-3 pt-3">
            <div className="bg-white shadow">
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
                <a href="#" className="text-dark text-decoration-none">
                  <h3 className="fw-bold h5">Primeiros contatos</h3>
                </a>
                <p className="mb-0">
                  Foi escrito durante o internato (os últimos dois anos da
                  graduação de medicina), período que motivou diversas reflexões
                  enquanto eu passava por atendimentos em diversas
                  especialidades médicas.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-3 pt-3">
            <div className="bg-white shadow">
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
                <a href="#" className="text-dark text-decoration-none">
                  <h3 className="fw-bold h5">Fotopoemas viajantes</h3>
                </a>
                <p className="mb-0">
                  Livro de fotografias e autorais, motivados por viagens que eu
                  faço.
                </p>
                <p className="mb-0">1: Brasil, Reino Unido e Irlanda.</p>
                <p className="mb-0">2: Espanha.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
