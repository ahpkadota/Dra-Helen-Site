export default function Academic({academic}) {
  return (
    <section className="bg-light pb-5 pt-5 text-center text-lg-start">
      <div className="container pb-4 pt-4">
        <div className="align-items-center row">
          <h2 className="display-4 fw-bold text-primary">Formaçao Academica</h2>
          <div className="col-lg-6 p-5 text-center">
            <img src={academic} className="d-block w-100" />
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
