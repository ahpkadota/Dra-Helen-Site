import ContentBlock from "../components/ContentBlock";
import ContentHeader from "../components/ContentHeader";
import Books from "../components/Books";
import BooksNew from "../components/BooksNew";

export default function Treatments() {
  function ContentHeader(props) {
    return (
      <section
        className="background-cover background-left-center bg-dark pb-5 pt-5 text-center text-white"
        style={{ backgroundImage: `url(http://)` }
      }
      >
        <div className="container pb-5 pt-5">
          <div className="pb-5 pt-5 row">
            <div className="col-lg-9 col-xl-8 ms-auto me-auto pb-5 pt-5">
              <h1 className="display-4 fw-bold mb-3">Livros</h1>
              <p className="h6 text-primary text-uppercase">...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <main>
      <ContentHeader ></ContentHeader>
      <BooksNew ></BooksNew>
    </main>
  );
}
