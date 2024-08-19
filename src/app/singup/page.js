import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
export default function Signup() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center p-0">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <img src="https://us-fbcloud.net/wb/data/1518/1518672-img.wduk3o.w0bw.jpg" className="img me-3" width={60} alt="..." />
                <a className="navbar-brand" href="#">Diary Cat</a>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Service">Service</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Contract">Contract</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                <Link href="/singup" className="btn btn-outline-success me-2" type="submit">Sign Up</Link>
                <Link href="/singin" className="btn btn-outline-success me-2" type="submit">Sign in</Link>                                  
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 bg-white p-5">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="floatingInput" className="form-label">Email</label>
              <input type="email" className="form-control" id="floatingInput" placeholder="me@gmail.com" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="123/45 Main St" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">Address 2</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>Sing</option>
                <option>Married</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Sign up</button>
            </div>
          </form>
        </div>
        <div className="col-md-6 bg-white text-center">
          <br></br>
          <img src="https://t4.ftcdn.net/jpg/08/51/78/05/360_F_851780544_DtL3awB3ppFw2VmZ21G2Z9Tuj88stUVf.jpg" me-1 p-1 width={800} height={500} alt="..." />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 text-center bg-white p-5">
          <div className="container">
            <footer className="d-flex flex-wrap justify-content-between border-top">
              <p className="col-md-4 mb-0 text-body-secondary">© 2024 kruanuchatcmtc</p>
              <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <div className="p-5">
                    <button type="submit" className="btn btn-primary">
                      <a className="nav-link active" aria-current="page" href="http://localhost:3000/#">Back</a>
                    </button>
                  </div>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}