import tips from "../data/tips.json";

export default function TipBox() {
  function TipItem({ title, content }) {
    return (
      <div class="lc-block mb-5">
        <div>
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <h3 class="mb-3">{title}</h3>
              <p class="card-text mb-auto">
              {content}
              </p>
            </div>
            <div class="col-auto d-none d-lg-block">
              <svg
                class="bd-placeholder-img"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >

              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  function TipList({ data }) {
    return data.map((emotion) => {
      return (
        <TipItem title={emotion.title} content={emotion.content}></TipItem>
      );
    });
  }
  function ContentHeader() {
    return (
      <section
        className="background-cover background-left-center bg-dark pb-5 pt-5 text-center text-white"
        style={{ backgroundImage: `url(http://)` }}
      >
        <div className="container pb-5 pt-5">
          <div className="pb-5 pt-5 row">
            <div className="col-lg-9 col-xl-8 ms-auto me-auto pb-5 pt-5">
              <h1 className="display-4 fw-bold mb-3">Dicas</h1>
              <p className="h6 text-primary">{tips.intro}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <ContentHeader> </ContentHeader>
      <section
        class="bg-light pb-5 pt-5 text-center text-lg-start"
        data-pg-collapsed
      >
        <div class="container py-5">
          <div class="row">
            <div class="col-md-3">
              <TipList data={tips.emotions}></TipList>
            </div>
            <div class="col-md-7 offset-md-1">
              <TipList data={tips.activities}></TipList>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
