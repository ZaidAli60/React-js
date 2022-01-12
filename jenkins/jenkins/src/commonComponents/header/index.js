import "./style.css";
function Header() {
    return (
        <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top ">
        <div className="container-fluid me-auto ">
          <a className="navbar-brand text-white" href="#">Jenkins</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
            <div>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav nav-items ">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Documentation</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Plugins</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Community</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">English</a>
              </li>
            
           
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success btns" type="submit">Search</button>
            </form>
            </div>
          
          </div>
        </div>
      </nav>
        </div>
        
    )
}

export default Header;