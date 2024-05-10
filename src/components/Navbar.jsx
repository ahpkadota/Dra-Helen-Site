import { Link } from 'react-router-dom';

export default function Navbar() {
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
                <Link className="link-dark nav-link p-lg-3" to="/">INICIO</Link>
                </li>
                <li className="nav-item">
                  <Link className="link-dark nav-link p-lg-3" to="/drahelen">Dra. Helen</Link>
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
                    <li>
                      <Link className="dropdown-item" to="/ansiedade-panico">
                        Ansiedade e Panico
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/compulsao-alimentar">
                        Compulsão alimentar
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/ta-bipolar">
                        TA bipolar
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/ansiedade-panico">
                        Ansiedade e pânico
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/tea">
                        TEA
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/tdah">
                        TDAH
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/deficiencia-intelectual">
                        Deficiência intelectual
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/outros-transtornos">
                        Outros transtornos do neurodesenvolvimento
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/tod">
                        TOD
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/depressao">
                        Depressão
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/toc">
                        TOC e transtornos relacionados
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/esquizofrenia">
                        Esquizofrenia e outros transtornos psicóticos
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/transtornos-neuro">
                        Transtornos neurocognitivos
                      </Link>
                    </li>
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
                    Livros
                  </Link>
                </li>
                <li className="nav-item">
                  
                  <Link className="link-dark nav-link p-lg-3" to="/contato">
                    Contato
                  </Link>
                </li>
              </ul>
              <div className="d-flex flex-wrap gap-2 py-1">
                
                <Link to="/" className="btn btn-primary pe-4 ps-4">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
