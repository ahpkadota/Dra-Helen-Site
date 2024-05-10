export default function ContentBlock(props) {
  const block1 = (text) => {
    return (
      <div className="align-items-center row">
        <div className="col-lg-4 pb-3 pt-3">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkyMnwwfDF8c2VhcmNofDJ8fHdvcmt8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
            className="img-fluid"
            alt="..."
            width="540"
            height="360"
          />
        </div>
        <div className="col-lg-8 pb-3 pt-3">
          <div className="pb-3 pt-3">
            <p className="fw-light mb-0">{text}</p>
          </div>
        </div>
      </div>
    );
  };
  const block2 = (text) => {
    return (
      <div className="align-items-center row">
        <div className="col-lg-4 order-lg-2 pb-3 pt-3">
          <img
            src="https://images.unsplash.com/photo-1488998527040-85054a85150e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkyMnwwfDF8c2VhcmNofDI2fHx3b3JrfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080"
            className="img-fluid"
            alt="..."
            width="540"
            height="360"
          />
        </div>
        <div className="col-lg-8 order-lg-1 pb-3 pt-3">
          <div className="pb-3 pt-3">
            <p className="fw-light mb-0">{text}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="bg-light pb-5 pt-5 text-center text-lg-start">
      <div className="container pb-4 pt-4">
        {props.content.map((item, i) => {
          return i % 2 === 0 ? block1(item) : block2(item);
        })}
      </div>
    </section>
  );
}
