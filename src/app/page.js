import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center p-0">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
              <img src="https://us-fbcloud.net/wb/data/1518/1518672-img.wduk3o.w0bw.jpg" className="img me-3" width={60} alt="..." />
                <a className="navbar-brand" href="#">Diary Cat</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="http://localhost:3000/#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://getbootstrap.com/docs/5.3/examples/dashboard/">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://getbootstrap.com/docs/5.3/examples/pricing/">Service</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://getbootstrap.com/docs/5.3/examples/album/">Contract</a>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <button className="btn btn-outline-success me-2" type="submit">Sign Up</button>
                    <button className="btn btn-outline-success" type="submit">Sign in</button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center p-0">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://www.khaosod.co.th/wpapp/uploads/2021/02/c3.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://inwfile.com/s-gf/omq9k0.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://image.dogilike.com/shareimg/contentimg/2021/meaw/%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89/29092021/iStock-953069774.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        ิ<br></br>

        <div className="row">
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <img src="https://thumb.photo-ac.com/8f/8fdc0925eeed04b5b4e8b4ce0a2355f0_t.jpeg" className="img-thumbnail" alt="..." />
                <h5 className="card-title">Cat</h5>
                <p className="card-text">Name Cat: Owen</p>
                <a href="#" className="btn btn-primary">Go Home</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <img src="https://thumb.photo-ac.com/a7/a73cc78b0b8beb6e44dd20c81a6c8410_t.jpeg" className="img-thumbnail" alt="..." />
                <h5 className="card-title">Cat</h5>
                <p className="card-text">Name Cat: Forsaken</p>
                <a href="#" className="btn btn-primary">Go Home</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <img src="https://img.pikbest.com/ai/illus_our/20230418/6bc6703165c9c4326000184b1afd77ea.jpg!sw800" className="img-thumbnail" alt="..." />
                <h5 className="card-title">Cat</h5>
                <p className="card-text">Name Cat: Alpha</p>
                <a href="#" className="btn btn-primary">Go Home</a>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-12 text-center bg-white p-5">
            <div className="container">
              <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-body-secondary">© 2024 kruanuchatcmtc</p>
                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                  <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
                </a>
                <ul className="nav col-md-4 justify-content-end">
                  <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                  <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
                  <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Service</a></li>
                  <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contract</a></li>
                </ul>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
