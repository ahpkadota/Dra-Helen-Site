export default function Contact() {
  return (
    <section className="bg-light pb-5 pt-5">
      <div className="container pb-4 pt-4">
        <div className="align-items-center row">
          <div className="col-lg-5 py-3">
            <h2 className="fw-bold h4 mb-4 text-uppercase">Entre em contato</h2>
            <p className="mb-4 text-secondary">
Você pode agendar sua teleconsulta enviando e-mail para: helenftorina.psiquiatria@gmail.com, ou agendar presencialmente através do Doctoralia do Instituto Inspire - Piracicaba.
            </p>
            <div className="mb-4 g-0 row">
              <div className="col-auto">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="24"
                  width="24"
                  className="me-3 text-primary"
                >
                  <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"></path>
                </svg>
              </div>
              <div className="col">
                <a href="mailto:ahpkadota2@gmail.com" className="text-secondary">
                  helenftorina.psiquiatria@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ms-auto py-3">
            <div className="bg-white p-4 p-lg-5 shadow">
              <h2 className="fw-bold h4 mb-4 text-uppercase">
                Envie seu e-mail
              </h2>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Insira o seu nome..."
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control rounded-0"
                    placeholder="Insira o seu email..."
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control rounded-0"
                    rows="6"
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn d-block w-100 btn-primary rounded-0 text-uppercase"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
