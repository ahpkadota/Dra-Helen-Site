export default function ContentHeader(props) {
  return (
    <section
      className="background-cover background-left-center bg-dark pb-5 pt-5 text-center text-white"
    >
      <div className="container pb-5 pt-5">
        <div className="pb-5 pt-5 row">
          <div className="col-lg-9 col-xl-8 ms-auto me-auto pb-5 pt-5">
            <p className="h6 text-primary text-uppercase">O qué é?</p>
            <h1 className="display-4 fw-bold mb-3">{props.content}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
