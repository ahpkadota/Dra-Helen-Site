export default function Contact() {
  return (
    <section className="bg-light pb-5 pt-5">
      <div className="container pb-4 pt-4">
        <div className="align-items-center row">
          <div className="col-lg-5 py-3">
            <h2 className="fw-bold h4 mb-4 text-uppercase">Get In Touch</h2>
            <p className="mb-4 text-secondary">
              {" "}
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="mb-4 g-0 row">
              <div className="col-auto">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="24"
                  width="24"
                  className="me-3 text-primary"
                >
                  <path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path>
                </svg>
              </div>
              <div className="col">
                <span className="text-secondary">
                  9056 Fairground Ave.
                  <br /> Dearborn, MI 48124
                  <br /> United States of America
                </span>
              </div>
            </div>
            <div className="mb-4 g-0 row">
              <div className="col-auto">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="24"
                  width="24"
                  className="me-3 text-primary"
                >
                  <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"></path>
                </svg>
              </div>
              <div className="col">
                {" "}
                <a href="mailto:info@company.com" className="text-secondary">
                  info@company.com
                </a>
              </div>
            </div>
            <div className="mb-4 g-0 row">
              <div className="col-auto">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="24"
                  width="24"
                  className="me-3 text-primary"
                >
                  <path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"></path>
                </svg>
              </div>
              <div className="col">
                {" "}
                <a href="tel:+0 123-456-789" className="text-secondary">
                  +0 123-456-789
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ms-auto py-3">
            <div className="bg-white p-4 p-lg-5 shadow">
              <h2 className="fw-bold h4 mb-4 text-uppercase">
                Send Us A message
              </h2>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Enter name..."
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control rounded-0"
                    placeholder="Enter email..."
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control rounded-0"
                    rows="6"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn d-block w-100 btn-primary rounded-0 text-uppercase"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}