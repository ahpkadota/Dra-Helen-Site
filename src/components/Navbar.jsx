import treatments from "../data/content.json";
import { Link } from "react-router-dom";

export default function Navbar() {
  function ListItem({title, path}) {
    return (
      <li>
        <Link className="dropdown-item" to={`/${path}`}>{title}</Link>
      </li>
    );
  }
  function TreatmentList() {
    let list = Object.keys(treatments).map((treatment) => {
      return (
        <ListItem title={treatments[treatment].header} path={treatment}></ListItem>
      );
    });
    return list;
  }
  return (
    <header className="bg-white">
      <div className="navbar-light">
        <nav className="navbar navbar-expand-lg pb-0 pt-0">
          <div className="container">
            <div
              className="collapse navbar-collapse pb-1 pt-1"
              id="navbarNavDropdown-2"
            >
              <ul className="me-auto navbar-nav">
                <li className="nav-item">
                  <Link className="link-dark nav-link p-lg-3" to="/">
                    INICIO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link-dark nav-link p-lg-3" to="/drahelen">
                    Dra. Helen
                  </Link>
                </li>
                <li className="dropdown">
                  <Link
                    className="link-dark nav-link p-lg-3 dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Tratamentos
                  </Link>
                  <ul className="dropdown-menu text-small shadow">
                    <TreatmentList></TreatmentList>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="link-dark nav-link p-lg-3" to="/dicas">
                    Dicas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link-dark nav-link p-lg-3" to="/#faq">
                    FAQ / Perguntas Frequentes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link-dark nav-link p-lg-3" to="/livros">
                    Meus livros
                  </Link>
                </li>
              </ul>
              <div className="d-flex flex-wrap gap-2 py-1">
                <Link to="/contato" className="btn btn-primary pe-4 ps-4">
                  Entre en contato
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
