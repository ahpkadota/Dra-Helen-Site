export default function Footer() {
  return (
    <footer className="bg-dark pt-5 text-white-50">
      <div className="container">
        <div className="align-items-center gy-3 row">
          <div className="col-md">
            <a
              className="align-items-center d-inline-flex fw-bold h2 lh-1 link-light mb-0 text-decoration-none text-uppercase"
              href="#"
            >
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="2.5em"
                height="2.5em"
                className="me-1 text-primary"
                fill="currentColor"
              >
                <path d="M90 42.301 76.666 19.209l-13.334 7.699V10H36.667v16.908l-13.335-7.699L10 42.301 23.332 50 10 57.698l13.331 23.093 13.335-7.698V90h26.666V73.093l13.334 7.698L90 57.698 76.666 50 90 42.301zm-9.107 17.84-6.666 11.543-17.561-10.138v21.787H43.332V61.546L25.774 71.684l-6.666-11.543L36.667 50 19.108 39.863l6.666-11.549 17.558 10.14V16.667h13.334v21.787l17.561-10.14 6.666 11.549L63.332 50l17.561 10.141z" />
              </svg>
              <span>Dra. Helen Furlan Torina</span>
            </a>
          </div>
          <div className="col-md-auto">
            <div className="d-inline-flex flex-wrap gap-2">
              <a
                href="#"
                aria-label="instagram"
                className="btn btn-primary lh-1 p-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="linkedin"
                className="btn btn-primary lh-1 p-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="pb-3 pt-3 small">
          <hr className="mt-0 " />
          <div className="align-items-center row">
            <div className="col-md pb-2 pt-2">
              <p className="mb-0">
                &copy; 2002 - 2021. All Rights Reserved - Company Name
              </p>
            </div>
            <div className="col-md-auto pb-2 pt-2">
              <a href="#" className="link-light text-decoration-none">
                Privacy Policy
              </a>
              |
              <a href="#" className="link-light text-decoration-none">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
