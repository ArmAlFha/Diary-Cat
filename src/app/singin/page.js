import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
export default function Signin() {
  return (
    <>
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
                <nav className="navbar">
                  <form className="container-fluid justify-content-start ">
                  <Link href="/singup" className="btn btn-outline-success me-2" type="submit">Sign Up</Link>
                  <Link href="/singin" className="btn btn-outline-success me-2" type="submit">Sign in</Link>
                  </form>
                </nav>
              </div>
            </nav>
          </div>

      <div className="row text-center p-5 bg-white">
        <div className="col-md-4"></div>
        <div className="col-md-4 ">
          <form>
          <img className="mb-4" src="https://img.pikbest.com/origin/09/42/37/256pIkbEsT759.jpg!f305cw" alt width={100} height={80} />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
        </div>
        <div className="col-md-4"></div>
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