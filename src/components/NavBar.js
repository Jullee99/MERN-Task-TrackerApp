import {Link} from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Task-Tracker-App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to="/AddTask">AddTask</Link>
              <Link className="nav-link" to="/deleteuser">DeleteUser</Link>
              <Link className="nav-link" to="/allusers">AllUsers</Link>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default NavBar;