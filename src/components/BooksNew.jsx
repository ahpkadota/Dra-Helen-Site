import bookData from "../data/books.json";

export default function BooksNew() {
  function BookItem({ header, text, img }) {
    return (
      <div className="col-lg-4 col-md-6 pb-3 pt-3">
        <div className="bg-white shadow">
          <img
            src={`http://ahpkadota.github.io/Dra-Helen-Site${img}`}
            className="img-fluid w-100"
            alt="..."
            width="700"
            height="480"
          />
          <div className="p-3">
            <h3 className="fw-bold h5">{header}</h3>
            {text.map((para) => {
              return <p className="mb-2">{para}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
  function BookList() {
    let list = Object.keys(bookData).map((book) => {
      return (
        <BookItem
          header={bookData[book].header}
          text={bookData[book].text}
          img={bookData[book].img}
        ></BookItem>
      );
    });
    return list;
  }

  return (
    <section className="bg-light pb-5 pt-5 text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">Meus livros</h2>
        <div className="justify-content-center row">
          <BookList></BookList>
        </div>
      </div>
    </section>
  );
}
