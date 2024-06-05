import logo from "../assets/img/logos/fmrpusp.png";
import logo2 from "../assets/img/logos/usp.png";
import logo3 from "../assets/img/logos/hcrp.jpg";

export default function Certifications() {
  return (
    <section className="bg-light pb-5 pt-5 text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">Certificaçoes</h2>
        <div className="g-2 justify-content-center row row-cols-lg-4 row-cols-sm-2">
          <div>
            <div className="bg-white pb-4 ps-3 pe-3 pt-4">
              <img src={logo} height="100" width="100" />
            </div>
          </div>{" "}
          <div>
            <div className="bg-white pb-4 ps-3 pe-3 pt-4">
              <img src={logo2} height="100" width="100" />
            </div>
          </div>{" "}
          <div>
            <div className="bg-white pb-4 ps-3 pe-3 pt-4">
              <img src={logo3} height="100" width="100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
