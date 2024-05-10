export default function Footer() {
  return (
    <footer className="bg-dark pt-5 text-white-50">
      <div className="container">
        <div className="align-items-center gy-3 row">
          <div className="col-md">
            {" "}
            <a
              className="align-items-center d-inline-flex fw-bold h2 lh-1 link-light mb-0 text-decoration-none text-uppercase"
              href="#"
            >
              {" "}
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
              <span>Health Hub</span>
            </a>
          </div>
          <div className="col-md-auto">
            <div className="d-inline-flex flex-wrap gap-2">
              {" "}
              <a
                href="#"
                aria-label="facebook"
                className="btn btn-primary lh-1 p-2"
              >
                {" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                </svg>{" "}
              </a>{" "}
              <a href="#" aria-label="twitter" className="btn btn-primary lh-1 p-2">
                {" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                </svg>{" "}
              </a>{" "}
              <a
                href="#"
                aria-label="instagram"
                className="btn btn-primary lh-1 p-2"
              >
                {" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                </svg>{" "}
              </a>{" "}
              <a
                href="#"
                aria-label="linkedin"
                className="btn btn-primary lh-1 p-2"
              >
                {" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                </svg>{" "}
              </a>{" "}
              <a href="#" aria-label="youtube" className="btn btn-primary lh-1 p-2">
                {" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                </svg>{" "}
              </a>
            </div>
          </div>
        </div>
        <hr className="mb-4 mt-4" />
        <div className="row">
          <div className="col-lg-4 py-3">
            <h2 className="fw-bold h5 mb-4 text-primary">Quick Links</h2>
            <div className="row">
              <div className="col-sm-6">
                <ul className="list-unstyled">
                  <li className="mb-3">
                    {" "}
                    <a href="#" className="link-light text-decoration-none">
                      About Us
                    </a>
                  </li>
                  <li className="mb-3">
                    {" "}
                    <a href="#" className="link-light text-decoration-none">
                      Our Services
                    </a>
                  </li>
                  <li className="mb-3">
                    {" "}
                    <a href="#" className="link-light text-decoration-none">
                      Find a Doctor
                    </a>
                  </li>
                  <li className="mb-3">
                    {" "}
                    <a href="#" className="link-light text-decoration-none">
                      Our Departments
                    </a>
                  </li>
                  <li className="mb-3">
                    {" "}
                    <a href="#" className="link-light text-decoration-none">
                      News & Updates
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list-unstyled">
                  <li className="mb-3">
                    {" "}
                    <a href="#" className="link-light text-decoration-none">
                      Careers
                    </a>
                  </li>
                  <li className="mb-3">
                    {" "}
                    <a href="#" className="link-light text-decoration-none">
                      Customers
                    </a>
                  </li>
                  <li className="mb-3">
                    {" "}
                    <a href="#" className="link-light text-decoration-none">
                      Contact Us
                    </a>
                  </li>
                  <li className="mb-3">
                    {" "}
                    <a href="#" className="link-light text-decoration-none">
                      Success Stories
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 py-3">
            <h2 className="fw-bold h5 mb-4 text-primary">Latest Posts</h2>
            <div className="align-items-center g-3 mb-3 row">
              <div className="col-3">
                {" "}
                <a href="#" className="d-block">
                  <img
                    src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDI4fHx0cmF2ZWx8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=350&h=240&fit=crop"
                    className="img-fluid rounded w-100"
                    alt="..."
                    width="350"
                    height="240"
                  />
                </a>
              </div>
              <div className="col">
                <h3 className="h6 mb-1">
                  <a href="#" className="link-light text-decoration-none">
                    5 Habits you should maintain daily
                  </a>
                </h3>
                <span className="small">Sept 21, 2021</span>
              </div>
            </div>
            <div className="align-items-center g-3 mb-3 row">
              <div className="col-3">
                {" "}
                <a href="#" className="d-block">
                  <img
                    src="https://images.unsplash.com/photo-1577327966244-999949c7e884?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDEyfHxidXNpbmVzcyUyMHBob3RvZ3JhcGhlcnxlbnwwfHx8&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=350&h=240&fit=crop"
                    className="img-fluid rounded w-100"
                    alt="..."
                    width="350"
                    height="240"
                  />
                </a>
              </div>
              <div className="col">
                <h3 className="h6 mb-1">
                  <a href="#" className="link-light text-decoration-none">
                    Supporting Front-line Workers with Resiliency Training
                  </a>
                </h3>
                <span className="small">Sept 21, 2021</span>
              </div>
            </div>
            <div className="align-items-center g-3 mb-3 row">
              <div className="col-3">
                {" "}
                <a href="#" className="d-block">
                  <img
                    src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE0MHx8Y29sb3JzJTIwd2Vic2l0ZXxlbnwwfHx8&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=350&h=240&fit=crop"
                    className="img-fluid rounded w-100"
                    alt="..."
                    width="350"
                    height="240"
                  />
                </a>
              </div>
              <div className="col">
                <h3 className="h6 mb-1">
                  <a href="#" className="link-light text-decoration-none">
                    Boosting your child&rsquo;s immune system
                  </a>
                </h3>
                <span className="small">Sept 21, 2021</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 py-3">
            <h2 className="fw-bold h5 mb-4 text-primary">Newsletter</h2>
            <p className="mb-3">
              Subscribe to our newsletter and get exclusive updates directly in
              your inbox.
            </p>
            <form className="mb-4">
              <div className="bg-white border input-group overflow-hidden p-1 rounded">
                <input
                  type="email"
                  className="border-0 form-control pe-3 ps-3"
                  placeholder="Enter email..."
                  aria-label="Recipient's email"
                  aria-describedby="button-addon2"
                  required
                />
                <button
                  className="btn btn-primary pb-2 pe-4 ps-4 pt-2 rounded"
                  type="submit"
                  id="button-addon2"
                  aria-label="submit"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="d-inline-block"
                    height="16"
                    width="16"
                  >
                    <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                  </svg>
                </button>
              </div>
            </form>
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
              </a>{" "}
              |{" "}
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
