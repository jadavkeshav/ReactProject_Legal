import proptypes from 'prop-types';
import { Link } from "react-router-dom";

function NavBar(props) {

    return (
        <nav className= {`navbar navbar-expand-lg navbar-success bg-success`} id='navbar'>
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/About">{props.about}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/chatbot">ChatBot</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active " to="/off">OfflineResources</Link>
                        </li>
                    </ul>
                    <form className="d-flex MX-3" role="search" >
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
NavBar.prototype = {
    title: proptypes.string,

};

NavBar.defaultProps = {
    title: 'change ur title',
    about: 'About'
};

export default NavBar;
