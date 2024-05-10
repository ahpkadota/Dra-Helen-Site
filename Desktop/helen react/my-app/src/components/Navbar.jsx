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
                  {" "}
                  <a className="link-dark nav-link p-lg-3" href="/">
                    INICIO
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="link-dark nav-link p-lg-3" href="drahelen">
                    Dra. Helen
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    className="link-dark nav-link p-lg-3 dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Tratamentos
                  </a>
                  <ul className="dropdown-menu text-small shadow">
                    <li>
                      <a className="dropdown-item" href="ansiedade-panico">
                        Ansiedade e Panico
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="compulsao-alimentar">
                        Compulsão alimentar
                      </a>
                    </li>{" "}
                    <li>
                      <a className="dropdown-item" href="ta-bipolar">
                        TA bipolar
                      </a>
                    </li>{" "}
                    <li>
                      <a className="dropdown-item" href="ansiedade-panico">
                        Ansiedade e pânico
                      </a>
                    </li>{" "}
                    <li>
                      <a className="dropdown-item" href="tea">
                        TEA
                      </a>
                    </li>{" "}
                    <li>
                      <a className="dropdown-item" href="tdah">
                        TDAH
                      </a>
                    </li>{" "}
                    <li>
                      <a className="dropdown-item" href="deficiencia-intelectual">
                        Deficiência intelectual
                      </a>
                    </li>{" "}
                    <li>
                      <a className="dropdown-item" href="outros-transtornos">
                        Outros transtornos do neurodesenvolvimento
                      </a>
                    </li>{" "}
                    <li>
                      <a className="dropdown-item" href="tod">
                        TOD
                      </a>
                    </li>{" "}
                    <li>
                      <a className="dropdown-item" href="depressao">
                        Depressão
                      </a>
                    </li>{" "}
                    <li>
                      <a className="dropdown-item" href="toc">
                        TOC e transtornos relacionados
                      </a>
                    </li>{" "}
                    <li>
                      <a className="dropdown-item" href="esquizofrenia">
                        Esquizofrenia e outros transtornos psicóticos
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="transtornos-neuro">
                        Transtornos neurocognitivos
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="link-dark nav-link p-lg-3" href="dicas">
                    Dicas
                  </a>
                </li>{" "}
                <li className="nav-item">
                  {" "}
                  <a className="link-dark nav-link p-lg-3" href="/#faq">
                    FAQ / Perguntas Frequentes
                  </a>
                </li>{" "}
                <li className="nav-item">
                  {" "}
                  <a className="link-dark nav-link p-lg-3" href="livros">
                    Livros
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="link-dark nav-link p-lg-3" href="contato">
                    Contato
                  </a>
                </li>
              </ul>
              <div className="d-flex flex-wrap gap-2 py-1">
                {" "}
                <a href="#" className="btn btn-primary pe-4 ps-4">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
