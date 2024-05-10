export default function Hero({main}) {
  return (
    <section
      className="background-right-top bg-light opacity-100 pb-5 position-relative pt-5"
      style={{ backgroundImage: `url(${main})` }} // Correct formatting for background image
    >
      <div className="container mb-5 mt-5 pb-5 pt-5">
        <div className="align-items-center mb-5 mt-5 pb-5 pt-5 row">
          <div className="col-md-10 col-xl-7">
            <h1 className="display-4 fw-bold text-capitalize text-dark">
              <span className="d-block fw-normal">Dra. Helen Furlan Torina</span>{" "}
              Médica Psiquiatra
            </h1>
            <p className="mb-4 pe-sm-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet.
              Curabitur ac sagittis neque, vel egestas est.
            </p>
            <a href="#" className="btn btn-primary pe-4 ps-4">
              Agende sua consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
