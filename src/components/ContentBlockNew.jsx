export default function ContentBlockNew(props) {
  const block = (text) => {
    return (
      <div className="align-items-center row">
        <div className="col-lg-4 pb-3 pt-3">
          <img
            src={`http://ahpkadota.github.io/Dra-Helen-Site${props.img}`}
            className="img-fluid"
            alt="..."
            width="540"
            height="360"
          />
        </div>
        <div className="col-lg-8 pb-3 pt-3">
            {text.map((para) => {
              return (
                <div className="pb-3 pt-3">
                  <p className="fw-light mb-0">{para}</p>
                </div>
              );
            })}
        </div>
      </div>
    );
  };
  return (
    <section className="bg-light pb-5 pt-5 text-center text-lg-start">
      <div className="container pb-4 pt-4">{block(props.content)}</div>
    </section>
  );
}
